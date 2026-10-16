const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const { runInNewContext } = require('node:vm');

const { transpileModule, ScriptTarget, ModuleKind } = require('typescript');
const source = transpileModule(
  readFileSync(join(__dirname, '../instrumentation-client.ts'), 'utf8'),
  { compilerOptions: { target: ScriptTarget.ES2017, module: ModuleKind.CommonJS } },
).outputText;

function element(attributes = {}, children = []) {
  const values = new Map(Object.entries(attributes));
  return {
    nodeType: 1,
    values,
    get attributes() { return [...values.keys()].map(name => ({ name })); },
    removeAttribute(name) { values.delete(name); },
    querySelectorAll() { return children; },
  };
}

function setup() {
  const body = element({
    bis_register: 'extension registration',
    '__processed_ebca4b09-bb45-4ce5-a7cc-6179f78bab3b__': 'true',
    __processed_unrelated__: 'keep',
    class: 'portfolio',
  });
  const card = element({
    bis_skin_checked: '1',
    id: 'skills',
    class: 'skill-card glass',
    'aria-hidden': 'false',
    'data-category': 'frontend',
  });
  const events = new Map();
  let callback, timeout, disconnected = false, cleared = false;
  const context = {
    process: { env: { NODE_ENV: 'development' } },
    document: { body, documentElement: element({ lang: 'en' }, [body, card]) },
    window: {
      location: { hostname: 'localhost' },
      setTimeout(fn) { timeout = fn; return 1; },
      clearTimeout() { cleared = true; },
      addEventListener(name, fn) { events.set(name, fn); },
      removeEventListener(name) { events.delete(name); },
    },
    MutationObserver: class {
      constructor(fn) { callback = fn; }
      observe() {}
      disconnect() { disconnected = true; }
    },
  };
  runInNewContext(source, context);
  return {
    body, card, context, events,
    mutate: records => callback(records),
    expire: () => timeout(),
    stopped: () => disconnected && cleared && events.size === 0,
  };
}

test('cleans observed extension attributes and preserves application attributes', () => {
  const { body, card } = setup();
  assert.deepEqual(Object.fromEntries(body.values), {
    __processed_unrelated__: 'keep', class: 'portfolio',
  });
  assert.deepEqual(Object.fromEntries(card.values), {
    id: 'skills', class: 'skill-card glass',
    'aria-hidden': 'false', 'data-category': 'frontend',
  });
});

test('cleans markers added after startup and tolerates its own removal records', () => {
  const fixture = setup();
  fixture.card.values.set('bis_skin_checked', '1');
  const record = { type: 'attributes', target: fixture.card };
  fixture.mutate([record]);
  fixture.mutate([record]);
  assert.equal(fixture.card.values.has('bis_skin_checked'), false);
  assert.equal(fixture.card.values.get('id'), 'skills');
});

test('cleans markers on streamed elements and ignores text nodes', () => {
  const fixture = setup();
  const child = element({ bis_skin_checked: '1', hidden: '' });
  const streamed = element({ bis_skin_checked: '1' }, [child]);
  fixture.mutate([{ type: 'childList', addedNodes: [{ nodeType: 3 }, streamed] }]);
  assert.equal(streamed.values.has('bis_skin_checked'), false);
  assert.deepEqual(Object.fromEntries(child.values), { hidden: '' });
});

for (const event of ['faya:hydrated', 'pagehide']) {
  test(`disconnects the observer on ${event}`, () => {
    const fixture = setup();
    fixture.events.get(event)();
    assert.equal(fixture.stopped(), true);
  });
}

test('stops after a bounded interval if hydration never completes', () => {
  const fixture = setup();
  fixture.expire();
  assert.equal(fixture.stopped(), true);
});

test('does not touch the DOM in production', () => {
  runInNewContext(source, { process: { env: { NODE_ENV: 'production' } } });
});

test('does not touch non-local development pages', () => {
  runInNewContext(source, {
    process: { env: { NODE_ENV: 'development' } },
    window: { location: { hostname: 'portfolio.example.com' } },
  });
});

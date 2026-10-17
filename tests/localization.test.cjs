const assert = require('node:assert/strict');
const { readFileSync, existsSync, statSync } = require('node:fs');
const { resolve, dirname } = require('node:path');
const { createRequire } = require('node:module');
const { test } = require('node:test');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// Compile the actual shared components so both languages are tested before a build.
const cache = new Map();
function loadTypeScript(file) {
  file = resolve(__dirname, '..', file);
  if (!existsSync(file) || statSync(file).isDirectory()) {
    file = ['.ts', '.tsx', '/index.ts'].map(ext => file + ext).find(existsSync);
  }
  if (!file) throw new Error('Module not found');
  if (cache.has(file)) return cache.get(file).exports;
  const output = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: {
      target: ts.ScriptTarget.ES2017,
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText;
  const module = { exports: {} };
  cache.set(file, module);
  const nodeRequire = createRequire(file);
  const requireSource = specifier => specifier.startsWith('.')
    ? loadTypeScript(resolve(dirname(file), specifier))
    : nodeRequire(specifier);
  new Function('require', 'module', 'exports', output)(requireSource, module, module.exports);
  return module.exports;
}

const Portfolio = loadTypeScript('components/Portfolio.tsx').default;
const Document = loadTypeScript('components/Document.tsx').default;
const { getMetadata } = loadTypeScript('lib/i18n/metadata.ts');

for (const locale of ['en', 'ja']) {
  test(`${locale} renders a complete localized portfolio and accessible language links`, () => {
    const html = renderToStaticMarkup(React.createElement(Document, { locale },
      React.createElement(Portfolio, { locale })));
    assert.ok(html.includes(`<html lang="${locale}">`));
    assert.match(html, /Fadiyah/);
    assert.match(html, /Adiningsih/);
    assert.match(html, /mailto:fayadin.work@gmail.com/);
    assert.match(html, /https:\/\/github.com\/fadiyaha30/);
    for (const id of ['about', 'experience', 'education', 'work', 'skills']) {
      assert.ok(html.includes(`id="${id}"`));
    }
    assert.match(html, /href="\/" lang="en" hrefLang="en"/);
    assert.match(html, /href="\/ja" lang="ja" hrefLang="ja"/);
    assert.ok(html.includes(`href="${locale === 'ja' ? '/ja' : '/'}" lang="${locale}" hrefLang="${locale}" aria-label="${locale === 'ja' ? '日本語' : 'English'}" aria-current="page"`));
    if (locale === 'ja') {
      for (const text of ['フルスタックエンジニア', 'キャリアの歩み', '2022年5月〜7月', '妊娠中の体重管理', 'ユーザー認証。', '開発中', 'スキルのカテゴリで絞り込み']) {
        assert.ok(html.includes(text), `Missing Japanese content: ${text}`);
      }
      for (const text of ['View my work', 'My contributions', 'In development', 'Learning through building.']) {
        assert.ok(!html.includes(text), `Untranslated content: ${text}`);
      }
    } else {
      assert.ok(html.includes('Full Stack Developer'));
      assert.ok(html.includes('View my work'));
      assert.ok(html.includes('May–Jul 2022'));
      assert.ok(html.includes('In development'));
    }
  });
}

test('language metadata has distinct canonical URLs and reciprocal language alternatives', () => {
  for (const locale of ['en', 'ja']) {
    const metadata = getMetadata(locale);
    assert.equal(metadata.alternates.canonical, locale === 'ja' ? '/ja' : '/');
    assert.deepEqual(metadata.alternates.languages, { en: '/', ja: '/ja', 'x-default': '/' });
    assert.ok(metadata.title.includes(locale === 'ja' ? 'フルスタックエンジニア' : 'Full Stack Developer'));
  }
});

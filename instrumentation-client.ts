// Next.js runs this synchronously before React hydrates the document.
// Urban VPN's ad blocker marks server-rendered elements before React loads.
// Remove only its observed markers during local development; keep all React
// hydration checks enabled and leave the production page untouched.
if (
  process.env.NODE_ENV === "development" &&
  ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname)
) {
  function isElement(node: Node): node is Element {
    return node.nodeType === 1;
  }

  function cleanElement(element: Element) {

    for (const { name } of [...element.attributes]) {
      if (
        name === "bis_skin_checked" ||
        name === "bis_register" ||
        (element === document.body &&
          /^__processed_[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}__$/i.test(name))
      ) {
        element.removeAttribute(name);
      }
    }
  }

  function cleanTree(root: Element) {
    cleanElement(root);
    for (const element of root.querySelectorAll(
      "[bis_skin_checked], [bis_register], body",
    )) {
      cleanElement(element);
    }
  }

  cleanTree(document.documentElement);

  // The extension may scan after instrumentation runs but before hydration.
  // Watch that short interval, including streamed-in elements. Removing an
  // already absent marker does nothing, so our own mutations terminate.
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") {
        if (isElement(record.target)) cleanElement(record.target);
      }
      else {
        for (const node of record.addedNodes) {
          if (isElement(node)) cleanTree(node);
        }
      }
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
  });

  function stop() {
    observer.disconnect();
    window.clearTimeout(timeout);
    window.removeEventListener("faya:hydrated", stop);
    window.removeEventListener("pagehide", stop);
  }

  const timeout = window.setTimeout(stop, 10_000);
  window.addEventListener("faya:hydrated", stop, { once: true });
  window.addEventListener("pagehide", stop, { once: true });
}

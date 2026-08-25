/* Content-only mode plumbing. The host page sizes the iframe from the height
   we post, sends the theme and its viewport box back, and receives in-page
   jumps because this document cannot scroll itself. */
if (embedded) {
  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    link.search = '?embed=1';
  });

  // Measure the content, never scrollHeight: the parent sizes this iframe from
  // whatever we report, and scrollHeight can never fall below the iframe's own
  // height, so reporting it feeds the height straight back and grows forever.
  const measureHeight = () => {
    let bottom = 0;
    for (const node of document.body.children) {
      const style = getComputedStyle(node);
      if (
        style.display === 'none' ||
        style.position === 'fixed' ||
        style.position === 'absolute'
      ) {
        continue;
      }
      bottom = Math.max(bottom, node.getBoundingClientRect().bottom);
    }
    return Math.ceil(bottom + window.scrollY);
  };

  let lastHeight = 0;
  // `force` answers an explicit parent request, which must reply even when the
  // height has not changed since the last (possibly unheard) message.
  const sendHeight = (force = false) => {
    const height = measureHeight();
    if (!height || (!force && height === lastHeight)) return;
    lastHeight = height;
    window.parent.postMessage(
      { source: 'droidtribe-static', type: 'height', height },
      '*'
    );
  };

  const allowedParentOrigins = new Set([
    'https://hadiyarajesh.com',
    'https://www.hadiyarajesh.com',
    'http://localhost:3000',
    'http://localhost:3001'
  ]);

  window.addEventListener('message', (event) => {
    if (
      !allowedParentOrigins.has(event.origin) ||
      event.data?.source !== 'hadiyarajesh-site'
    ) {
      return;
    }
    if (event.data.type === 'request-height') {
      sendHeight(true);
      return;
    }
    if (event.data.type === 'viewport' && typeof event.data.top === 'number') {
      const root = document.documentElement;
      root.style.setProperty('--embed-modal-top', `${event.data.top}px`);
      if (typeof event.data.height === 'number') {
        root.style.setProperty(
          '--embed-viewport-height',
          `${event.data.height}px`
        );
      }
      return;
    }
    if (
      event.data.type === 'theme' &&
      ['light', 'dark'].includes(event.data.theme)
    ) {
      setTheme(event.data.theme, false);
    }
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    const target = id ? document.getElementById(id) : document.body;
    if (!target) return;
    event.preventDefault();
    window.parent.postMessage(
      {
        source: 'droidtribe-static',
        type: 'scroll-to',
        top: Math.max(0, Math.round(target.getBoundingClientRect().top))
      },
      '*'
    );
  });

  window.parent.postMessage(
    { source: 'droidtribe-static', type: 'ready' },
    '*'
  );
  const observe = () => sendHeight();
  new ResizeObserver(observe).observe(document.body);
  new ResizeObserver(observe).observe(document.querySelector('#main'));
  window.addEventListener('load', () => sendHeight(true));
  sendHeight(true);
}

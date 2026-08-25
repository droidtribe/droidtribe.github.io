/* The primary nav collapses behind a menu button on narrow screens. */
const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  const setNavOpen = (open) => {
    document.body.classList.toggle('nav-is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  navToggle.addEventListener('click', () =>
    setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true')
  );
  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNavOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setNavOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setNavOpen(false);
  });
}

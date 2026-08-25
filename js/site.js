/* Applies data/site.js to the markup, so no address or URL is written down
   twice. Elements carry a `data-site-*` hook and no literal value. */

const socialIcons = {
  github:
    'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.2-3.37-1.2-.45-1.16-1.12-1.46-1.12-1.46-.91-.63.07-.62.07-.62 1 .07 1.54 1.03 1.54 1.03.9 1.54 2.34 1.1 2.9.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.4-2 1.03-2.71-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.29 2.75-1.03 2.75-1.03.54 1.39.2 2.42.1 2.67.64.71 1.03 1.61 1.03 2.71 0 3.85-2.34 4.69-4.57 4.94.36.31.67.93.67 1.88v2.78c0 .27.18.57.69.48A10 10 0 0 0 12 2Z',
  linkedin:
    'M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 0 0 5.2 3a1.97 1.97 0 0 0 0 3.94 1.96 1.96 0 0 0 1.96-1.99ZM20 13.4c0-3.13-1.67-4.58-3.9-4.58-1.8 0-2.6.99-3.05 1.69V8.5H9.67V20h3.38v-6.39c0-.34.02-.68.13-.92.27-.68.87-1.38 1.88-1.38 1.33 0 1.86 1.01 1.86 2.49V20H20v-6.6Z',
  youtube:
    'M23 12s0-3.24-.41-4.8a3.03 3.03 0 0 0-2.14-2.14C18.88 4.65 12 4.65 12 4.65s-6.88 0-8.45.41A3.03 3.03 0 0 0 1.41 7.2C1 8.76 1 12 1 12s0 3.24.41 4.8a3.03 3.03 0 0 0 2.14 2.14c1.57.41 8.45.41 8.45.41s6.88 0 8.45-.41a3.03 3.03 0 0 0 2.14-2.14C23 15.24 23 12 23 12ZM10 15.5v-7l6 3.5-6 3.5Z',
  x: 'm18.9 2 2.7 3.1-6.09 6.96L22 22h-5.1l-4-5.1L8.4 22H3.3l6.57-7.5L2 2h5.1l3.7 4.8L15.2 2h3.7Zm-1.8 16.8h1.4L7.2 5.1H5.8L17.1 18.8Z'
};

document.querySelectorAll('[data-site-name]').forEach((node) => {
  node.textContent = site.name;
});

document.querySelectorAll('[data-site-email]').forEach((node) => {
  node.textContent = site.email;
  node.setAttribute('href', `mailto:${site.email}`);
});

document.querySelectorAll('[data-site-youtube]').forEach((node) => {
  node.setAttribute('href', site.youtube);
});

document.querySelectorAll('[data-site-community]').forEach((node) => {
  node.setAttribute('href', site.parentCommunityUrl);
});

document.querySelectorAll('[data-site-socials]').forEach((node) => {
  node.setAttribute('aria-label', `${site.name} social links`);
  node.innerHTML = site.social
    .map(
      ({ label, icon, url }) =>
        `<a href="${url}" target="_blank" rel="noreferrer" aria-label="${label}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${socialIcons[icon]}" /></svg></a>`
    )
    .join('');
});

document.querySelectorAll('[data-site-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

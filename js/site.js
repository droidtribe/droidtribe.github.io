/* Applies the values in data/site.js to the markup. The pages carry literal
   fallbacks so they still read correctly without JavaScript; this keeps every
   copy in step with the single source. */
document.querySelectorAll('[data-site-email]').forEach((node) => {
  node.textContent = site.email;
  node.setAttribute('href', `mailto:${site.email}`);
});
document.querySelectorAll('[data-site-email-href]').forEach((node) => {
  node.setAttribute('href', `mailto:${site.email}`);
});
document.querySelectorAll('[data-site-youtube]').forEach((node) => {
  node.setAttribute('href', site.youtube);
});
document.querySelectorAll('[data-site-community]').forEach((node) => {
  node.setAttribute('href', site.parentCommunityUrl);
});

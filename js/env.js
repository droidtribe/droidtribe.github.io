/* Loaded first. Detects content-only mode and exposes the shared icon markup
   the render scripts reuse. These are plain scripts, so later files in the
   page see everything declared here. */
const ASSETS = 'assets/';
const embedded = new URLSearchParams(location.search).get('embed') === '1';
if (embedded) document.documentElement.classList.add('is-embedded');

const icons = {
  mapPin: `<svg class="map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  recording: `<svg class="recording-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/></svg>`
};

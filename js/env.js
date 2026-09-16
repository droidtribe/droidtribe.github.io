/* Loaded first. Detects content-only mode and exposes the shared icon markup
   the render scripts reuse. These are plain scripts, so later files in the
   page see everything declared here. */
const ASSETS = 'assets/';
const embedded = new URLSearchParams(location.search).get('embed') === '1';
if (embedded) document.documentElement.classList.add('is-embedded');

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const now = new Date();
const TODAY = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

// ISO dates compare correctly as plain strings, so no parsing and no timezone
// surprises about which day it is.
const isUpcoming = (meetup) => meetup.on > TODAY;

const longDate = (iso) => {
  const [year, month, day] = iso.split('-');
  return `${Number(day)} ${MONTH_NAMES[Number(month) - 1]}, ${year}`;
};

const clockTime = (time) => {
  const [hour, minute] = time.split(':').map(Number);
  const suffix = hour < 12 ? 'AM' : 'PM';
  return `${((hour + 11) % 12) + 1}:${String(minute).padStart(2, '0')} ${suffix}`;
};

const durationLabel = (start, end) => {
  const minutes =
    end.split(':').reduce((h, m) => h * 60 + Number(m), 0) -
    start.split(':').reduce((h, m) => h * 60 + Number(m), 0);
  if (minutes < 60) return `${minutes} min`;
  const rest = minutes % 60;
  return rest
    ? `${Math.floor(minutes / 60)} hr ${rest} min`
    : `${Math.floor(minutes / 60)} hr`;
};

const icons = {
  mapPin: `<svg class="map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  recording: `<svg class="recording-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/></svg>`,
  expand: `<span class="photo-expand" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></span>`,
  agenda: `<svg class="recording-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M8 2.5v4M16 2.5v4M3 9.5h18M7.5 14h2M7.5 17.5h2M12.5 14h4M12.5 17.5h4"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17"/></svg>`
};

/* The meetup timeline, rendered from data/meetups.js. One card is open at a
   time; the whole card is the toggle, minus its own links and buttons. */
const meetupList = document.querySelector('#meetup-list');

const speakerPhoto = (file) => `${ASSETS}speakers/${file}`;
const meetupPhoto = (number, file) => `${ASSETS}meetup-${number}/${file}`;
const HOST = 'Rajesh Hadiya';

if (meetupList) {
  const nameMarkup = ({ name, url }) =>
    url
      ? `<a href="${url}" target="_blank" rel="noreferrer">${name}</a>`
      : `<span>${name}</span>`;

  // A talk given by one person is a single link across the whole row. A joint
  // talk stacks the headshots and links each name on its own, because the row
  // no longer points at one place.
  const talkMarkup = ({ title, speakers }) => {
    const hostChip = speakers.some((s) => s.name === HOST)
      ? '<span class="host-chip">Host</span>'
      : '';
    const avatars = speakers
      .map(
        (s) =>
          `<img src="${speakerPhoto(s.photo)}" alt="${s.name}" loading="lazy" />`
      )
      .join('');
    const solo = speakers.length === 1;
    const names = solo
      ? speakers[0].name
      : speakers.map(nameMarkup).join('<span aria-hidden="true">&</span>');
    const body = `<span class="speaker-avatars">${avatars}</span><span><span class="speaker-name">${names}${hostChip}</span><span class="speaker-topic">${title}</span></span>`;
    if (solo && speakers[0].url) {
      return `<a class="speaker" href="${speakers[0].url}" target="_blank" rel="noreferrer">${body}</a>`;
    }
    return `<div class="speaker${solo ? '' : ' speaker-group'}">${body}</div>`;
  };

  // Day and time are separate parts so a narrow card breaks between them,
  // never in the middle of "11 AM - 5 PM".
  const dateMarkup = (meetup) =>
    [longDate(meetup.on), meetup.time]
      .map((part) => `<span class="meetup-date-part">${part}</span>`)
      .join('<span class="meetup-date-sep" aria-hidden="true">·</span>');

  const photoMarkup = (photo, meetup, index) => {
    const src = meetupPhoto(meetup.number, photo);
    const alt = `Meetup #${meetup.number} photo ${index + 1}`;
    return `<button class="photo-button" type="button" data-photo="${src}" data-alt="${alt}" aria-label="Open ${alt}"><img src="${src}" alt="${alt}" loading="lazy" />${icons.expand}</button>`;
  };

  const meetupMarkup = (meetup, index) => {
    const open = index === 0;
    const upcoming = isUpcoming(meetup);
    const recording =
      meetup.recording === 'soon'
        ? `<a class="recording-link" href="${site.youtube}" target="_blank" rel="noreferrer">${icons.recording}<span>Recordings coming soon on YouTube</span></a>`
        : meetup.recording
          ? `<a class="recording-link" href="${meetup.recording}" target="_blank" rel="noreferrer">${icons.recording}<span>Watch recordings</span></a>`
          : '';
    const rsvp =
      upcoming && meetup.rsvp
        ? `<a class="rsvp-link" href="${meetup.rsvp}" target="_blank" rel="noreferrer">Reserve a seat <span aria-hidden="true">→</span></a>`
        : '';
    // Only worth offering before the day. Once a meetup is done its talk list
    // says everything the agenda would, and the recordings say it better.
    const agenda =
      upcoming && meetup.agenda?.length
        ? `<button class="recording-link" type="button" data-agenda="${meetup.number}">${icons.agenda}<span>See the agenda</span></button>`
        : '';
    const actions =
      rsvp || agenda || recording
        ? `<div class="panel-actions">${rsvp}${agenda}${recording}</div>`
        : '';
    // A meetup can sit here before its photos are in — and an upcoming one has none.
    const photos = meetup.photos?.length
      ? `<div><p class="panel-label">Photos</p><div class="photo-strip">${meetup.photos.map((photo, i) => photoMarkup(photo, meetup, i)).join('')}</div></div>`
      : '';
    const talksLabel = upcoming ? 'What&rsquo;s on' : 'Talks';
    const upcomingChip = upcoming
      ? '<span class="city-chip upcoming-chip">Upcoming</span>'
      : '';
    return `<article class="meetup${open ? ' is-open' : ''}${upcoming ? ' is-upcoming' : ''}"><span class="meetup-mark" aria-hidden="true">${meetup.number}</span><div class="meetup-card"><button class="meetup-trigger" type="button" aria-expanded="${open}" aria-controls="meetup-${meetup.number}"><span class="meetup-title-row"><span class="meetup-title">Meetup #${meetup.number}</span>${upcomingChip}<span class="city-chip">${icons.mapPin} ${meetup.city}</span></span><span class="meetup-meta"><span class="meetup-date">${dateMarkup(meetup)}</span><span class="chevron" aria-hidden="true">${icons.chevron}</span></span></button><div class="venue">${icons.mapPin}<span class="venue-label">Venue</span><a href="${meetup.map}" target="_blank" rel="noreferrer">${meetup.venue}</a></div><div class="meetup-panel" id="meetup-${meetup.number}"${open ? '' : ' hidden'}><div><p class="panel-label">${talksLabel}</p><div class="speaker-grid">${meetup.talks.map(talkMarkup).join('')}</div></div>${photos}${actions}</div></div></article>`;
  };

  meetupList.innerHTML = meetups.map(meetupMarkup).join('');

  const archiveSummary = document.querySelector('#archive-summary');
  if (archiveSummary) {
    const words = [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten'
    ];
    const held = meetups.filter((meetup) => !isUpcoming(meetup));
    const count = words[held.length - 1] || held.length;
    // Oldest first, so cities read in the order the community reached them.
    const cities = [...new Set([...held].reverse().map((m) => m.city))];
    const list =
      cities.length > 1
        ? `${cities.slice(0, -1).join(', ')}, and ${cities[cities.length - 1]}`
        : cities[0];
    archiveSummary.textContent = `${count} gatherings across ${list}.`;
  }

  const setMeetupOpen = (meetup, shouldOpen) => {
    document.querySelectorAll('.meetup').forEach((node) => {
      node.classList.remove('is-open');
      node
        .querySelector('.meetup-trigger')
        .setAttribute('aria-expanded', 'false');
      node.querySelector('.meetup-panel').hidden = true;
    });
    if (shouldOpen) {
      meetup.classList.add('is-open');
      meetup
        .querySelector('.meetup-trigger')
        .setAttribute('aria-expanded', 'true');
      meetup.querySelector('.meetup-panel').hidden = false;
    }
  };

  meetupList.addEventListener('click', (event) => {
    const card = event.target.closest('.meetup-card');
    if (!card) return;
    if (event.target.closest('a, .photo-button, .recording-link')) return;
    const meetup = card.closest('.meetup');
    setMeetupOpen(meetup, !meetup.classList.contains('is-open'));
  });
}

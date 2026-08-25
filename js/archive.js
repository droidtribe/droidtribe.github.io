/* The meetup timeline, rendered from data/meetups.js. One card is open at a
   time; the whole card is the toggle, minus its own links and buttons. */
const meetupList = document.querySelector('#meetup-list');

const speakerPhoto = (file) => `${ASSETS}speakers/${file}`;
const meetupPhoto = (number, file) => `${ASSETS}meetup-${number}/${file}`;
const HOST = 'Rajesh Hadiya';

if (meetupList) {
  const speakerMarkup = ([name, topic, href, photo]) => {
    const hostChip = name === HOST ? '<span class="host-chip">Host</span>' : '';
    const content = `<img src="${speakerPhoto(photo)}" alt="${name}" loading="lazy" /><span><span class="speaker-name">${name}${hostChip}</span><span class="speaker-topic">${topic}</span></span>`;
    return href
      ? `<a class="speaker" href="${href}" target="_blank" rel="noreferrer">${content}</a>`
      : `<div class="speaker">${content}</div>`;
  };

  // Split on the middot so a narrow card breaks between day and time,
  // never in the middle of "11 AM - 5 PM".
  const dateMarkup = (value) =>
    value
      .split(' · ')
      .map((part) => `<span class="meetup-date-part">${part}</span>`)
      .join('<span class="meetup-date-sep" aria-hidden="true">·</span>');

  const photoMarkup = (photo, meetup, index) => {
    const src = meetupPhoto(meetup.number, photo);
    const alt = `Meetup #${meetup.number} photo ${index + 1}`;
    return `<button class="photo-button" type="button" data-photo="${src}" data-alt="${alt}" aria-label="Open ${alt}"><img src="${src}" alt="${alt}" loading="lazy" />${icons.expand}</button>`;
  };

  const meetupMarkup = (meetup, index) => {
    const open = index === 0;
    const recording = meetup.recording
      ? `<a class="recording-link" href="${meetup.recording}" target="_blank" rel="noreferrer">${icons.recording}<span>Watch recordings</span></a>`
      : '';
    return `<article class="meetup${open ? ' is-open' : ''}"><span class="meetup-mark" aria-hidden="true">${meetup.number}</span><div class="meetup-card"><button class="meetup-trigger" type="button" aria-expanded="${open}" aria-controls="meetup-${meetup.number}"><span class="meetup-title-row"><span class="meetup-title">Meetup #${meetup.number}</span><span class="city-chip">${icons.mapPin} ${meetup.city}</span></span><span class="meetup-meta"><span class="meetup-date">${dateMarkup(meetup.date)}</span><span class="chevron" aria-hidden="true">⌄</span></span></button><div class="venue">${icons.mapPin}<span class="venue-label">Venue</span><a href="${meetup.map}" target="_blank" rel="noreferrer">${meetup.venue}</a></div><div class="meetup-panel" id="meetup-${meetup.number}"${open ? '' : ' hidden'}><div><p class="panel-label">Speakers</p><div class="speaker-grid">${meetup.speakers.map(speakerMarkup).join('')}</div></div><div><p class="panel-label">Photos</p><div class="photo-strip">${meetup.photos.map((photo, i) => photoMarkup(photo, meetup, i)).join('')}</div></div>${recording}</div></div></article>`;
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
    const count = words[meetups.length - 1] || meetups.length;
    // Oldest first, so cities read in the order the community reached them.
    const cities = [...new Set([...meetups].reverse().map((m) => m.city))];
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

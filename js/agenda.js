/* The run of the day for a meetup, opened from its card. Rows that are talks
   point at `talks` by index rather than repeating the title and speakers. */
const agendaDialog = document.querySelector('#agenda');

if (agendaDialog) {
  const body = agendaDialog.querySelector('#agenda-body');
  const title = agendaDialog.querySelector('#agenda-title');

  const rowMarkup = (row, meetup) => {
    const talk = row.talk === undefined ? null : meetup.talks[row.talk];
    const heading = talk ? talk.title : row.title;
    const by = talk ? talk.speakers.map((s) => s.name).join(' & ') : row.by;
    const avatars = talk
      ? `<span class="agenda-avatars${talk.speakers.length > 1 ? ' is-group' : ''}">${talk.speakers
          .map(
            (s) =>
              `<img src="${speakerPhoto(s.photo)}" alt="" loading="lazy" />`
          )
          .join('')}</span>`
      : '';
    return `<div class="agenda-row${talk ? ' is-talk' : ''}${row.kind === 'break' ? ' is-break' : ''}">
      <span class="agenda-time">${clockTime(row.start)}<span class="agenda-dash" aria-hidden="true">–</span>${clockTime(row.end)}</span>
      <span class="agenda-main">${avatars}<span class="agenda-text"><span class="agenda-heading">${heading}</span>${by ? `<span class="agenda-by">${by}</span>` : ''}</span></span>
      <span class="agenda-duration">${durationLabel(row.start, row.end)}</span>
    </div>`;
  };

  const open = (meetup) => {
    title.textContent = `Meetup #${meetup.number} · ${meetup.city}`;
    body.innerHTML = meetup.agenda
      .map((row) => rowMarkup(row, meetup))
      .join('');
    agendaDialog.showModal();
    if (embedded) {
      // Same message the photo viewer sends — the host page centres whatever
      // modal is open against its own viewport.
      window.parent.postMessage(
        { source: 'droidtribe-static', type: 'lightbox-open' },
        '*'
      );
    }
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-agenda]');
    if (!trigger) return;
    const meetup = meetups.find(
      (m) => String(m.number) === trigger.dataset.agenda
    );
    if (meetup?.agenda?.length) open(meetup);
  });

  agendaDialog
    .querySelector('[data-close-agenda]')
    .addEventListener('click', () => agendaDialog.close());
  agendaDialog.addEventListener('click', (event) => {
    if (event.target === agendaDialog) agendaDialog.close();
  });
}

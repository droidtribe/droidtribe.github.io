/* Photo viewer. Opens on any photo button, pages with the arrows, the dots or
   the keyboard. Listens on the document so it does not depend on when the
   archive markup lands. */
const lightbox = document.querySelector('#lightbox');

if (lightbox) {
  const image = lightbox.querySelector('#lightbox-image');
  const count = lightbox.querySelector('#lightbox-count');
  const dots = lightbox.querySelector('#lightbox-dots');
  const prev = lightbox.querySelector('[data-lightbox-prev]');
  const next = lightbox.querySelector('[data-lightbox-next]');
  let gallery = [];
  let active = 0;

  const show = () => {
    const item = gallery[active];
    image.src = item.src;
    image.alt = item.alt;
    count.textContent = `${active + 1} / ${gallery.length}`;
    dots.innerHTML = gallery
      .map(
        (_, index) =>
          `<button type="button" class="lightbox-dot${index === active ? ' is-active' : ''}" role="tab" aria-label="Show photo ${index + 1}" aria-selected="${index === active}"></button>`
      )
      .join('');
    prev.disabled = gallery.length < 2;
    next.disabled = gallery.length < 2;
  };

  const move = (direction) => {
    if (gallery.length < 2) return;
    active = (active + direction + gallery.length) % gallery.length;
    show();
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.photo-button');
    if (!button) return;
    const strip = button.closest('.photo-strip');
    const buttons = [...strip.querySelectorAll('.photo-button')];
    gallery = buttons.map((node) => ({
      src: node.dataset.photo,
      alt: node.dataset.alt
    }));
    active = buttons.indexOf(button);
    show();
    lightbox.showModal();
    if (embedded) {
      window.parent.postMessage(
        { source: 'droidtribe-static', type: 'lightbox-open' },
        '*'
      );
    }
  });

  lightbox
    .querySelector('[data-close-lightbox]')
    .addEventListener('click', () => lightbox.close());
  prev.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    move(-1);
  });
  next.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    move(1);
  });
  dots.addEventListener('click', (event) => {
    const dot = event.target.closest('.lightbox-dot');
    if (!dot) return;
    active = [...dots.querySelectorAll('.lightbox-dot')].indexOf(dot);
    show();
  });
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  document.addEventListener('keydown', (event) => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });
}

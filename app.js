const ASSETS = 'assets/';
const HOST = 'Rajesh Hadiya';

// Each speaker is [name, talk, profile URL (optional), file in assets/speakers/].
const meetups = [
  {
    number: 6,
    city: 'Pune',
    venue: 'Technogise',
    date: '22 February, 2026 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/HVFnEuwW4NTJWAXt8',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxJ-MHJZiGyWxb7CiPpriHn9',
    speakers: [
      [
        'Belal Khan',
        'From Hugging Face to APK: Pipeline for Local Android AI',
        'https://www.linkedin.com/in/probelalkhan/',
        'belal-khan.jpg'
      ],
      [
        'Prakhar Gandhi',
        'NFC Integration with Jetpack Compose and KMP',
        'https://www.linkedin.com/in/prakhargandhi14/',
        'prakhar-gandhi.jpg'
      ],
      [
        'Rajesh Hadiya',
        'CI/CD for Android Developers',
        'https://www.linkedin.com/in/hadiyarajesh/',
        'rajesh-hadiya.jpg'
      ],
      [
        'Gaurav Thakkar',
        'Blazing Fast Gradle Builds for Android',
        'https://www.linkedin.com/in/gaurav-thakkar/',
        'gaurav-thakkar.jpg'
      ]
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg'
    ]
  },
  {
    number: 5,
    city: 'Mumbai',
    venue: 'CleverTap',
    date: '29 November, 2025 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/75568rBuHnHNr2GT9',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxLoEl9_CtCNaJEijxAOI8Ri',
    speakers: [
      [
        'Avik Mukherjee',
        'Owning a Legacy Android Codebase in 2025',
        'https://www.linkedin.com/in/avikmukherjee-android-dev/',
        'avik-mukherjee.jpg'
      ],
      [
        'Belal Khan',
        'Gemini Nano-On Device AI for Next Generation Apps',
        'https://www.linkedin.com/in/probelalkhan/',
        'belal-khan.jpg'
      ],
      [
        'Santosh Gaikar',
        'Scaling App from Zero to Millions',
        'https://www.linkedin.com/in/sgaikar1/',
        'santosh-gaikar.jpg'
      ],
      [
        'Saqeeb Mohammad',
        'White-Labeling Android Apps at Scale Using Jenkins CI/CD',
        'https://www.linkedin.com/in/msaqeeb72/',
        'saqeeb-mohammad.jpg'
      ]
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg',
      'photo-06.jpg',
      'photo-07.jpg',
      'photo-08.jpg',
      'photo-09.jpg'
    ]
  },
  {
    number: 4,
    city: 'Bengaluru',
    venue: 'InMobi',
    date: '10 October, 2025 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/89Q7UVDMuK3XvA4b6',
    recording:
      'https://www.youtube.com/playlist?list=PLqIWi4seAoxJVrNLBRYg9PNnorzlxzj4Q',
    speakers: [
      [
        'Jai Goyal',
        'What is AOSP and How to Contribute to AOSP',
        'https://www.linkedin.com/in/goyaljai/',
        'jai-goyal.jpg'
      ],
      [
        'Belal Khan',
        'A Hands-on Guide to KMP and Jetpack Compose',
        'https://www.linkedin.com/in/probelalkhan/',
        'belal-khan.jpg'
      ],
      [
        'Ankur Mudgal',
        'Unpacking Video Streaming with Exoplayer',
        'https://www.linkedin.com/in/ankurmudgal/',
        'ankur-mudgal.jpg'
      ],
      [
        'Ankit Kumar',
        'Why Every App Needs a Design System',
        'https://www.linkedin.com/in/ankitk22/',
        'ankit-kumar.jpg'
      ]
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg',
      'photo-06.jpg',
      'photo-07.jpg',
      'photo-08.jpg',
      'photo-09.jpg',
      'photo-10.jpg',
      'photo-11.jpg',
      'photo-12.jpg'
    ]
  },
  {
    number: 3,
    city: 'Pune',
    venue: 'Technogise',
    date: '2 August, 2025 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/R5w1U4ZjErgXbs637',
    recording:
      'https://youtube.com/playlist?list=PLqIWi4seAoxKoc1siRkJuCTJumuvMLqg8',
    speakers: [
      [
        'Shreyas Patil',
        'Debugging App Performance At Scale',
        'https://www.linkedin.com/in/patil-shreyas/',
        'shreyas-patil.jpg'
      ],
      [
        'Rajesh Hadiya',
        'Annotation Processor In Action',
        'https://www.linkedin.com/in/hadiyarajesh/',
        'rajesh-hadiya.jpg'
      ],
      [
        'Suraj Bichkunde',
        "Mobile At Scale: What They Don't Teach You",
        'https://www.linkedin.com/in/suraj-bichkunde-786729178/',
        'suraj-bichkunde.jpg'
      ],
      [
        'Gaurav Thakkar',
        'The Anatomy of a Hack in Android',
        'https://www.linkedin.com/in/gaurav-thakkar/',
        'gaurav-thakkar.jpg'
      ]
    ],
    photos: [
      'photo-01.jpg',
      'photo-02.jpg',
      'photo-03.jpg',
      'photo-04.jpg',
      'photo-05.jpg'
    ]
  },
  {
    number: 2,
    city: 'Pune',
    venue: 'Technogise',
    date: '9 March, 2025 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/R5w1U4ZjErgXbs637',
    recording:
      'https://www.youtube.com/playlist?list=PLqIWi4seAoxKIN3tdbk6Dwoyo1xdRH08v',
    speakers: [
      [
        'Suraj Kulkarni',
        'On-device LLMs on Android',
        'https://www.linkedin.com/in/thekoolsk/',
        'suraj-kulkarni.jpg'
      ],
      [
        'Rajesh Hadiya',
        'Compose, In the ViewModel',
        'https://www.linkedin.com/in/hadiyarajesh/',
        'rajesh-hadiya.jpg'
      ],
      [
        'Gandharva Kumar',
        'Measuring App Reliability',
        '',
        'gandharva-kumar.jpg'
      ],
      [
        'Gaurav Thakkar',
        'Kotlin Multiplatform Illusion',
        'https://www.linkedin.com/in/gaurav-thakkar/',
        'gaurav-thakkar.jpg'
      ]
    ],
    photos: ['photo-01.jpg', 'photo-02.jpg', 'photo-03.jpg', 'photo-04.jpg']
  },
  {
    number: 1,
    city: 'Pune',
    venue: 'Balaji Business Centre',
    date: '24 November, 2024 · 11 AM - 5 PM',
    map: 'https://maps.app.goo.gl/vauRW6ypNjFAc6xz6',
    speakers: [
      [
        'Kailash Sharma',
        'Server-side development with Ktor',
        'https://www.linkedin.com/in/thekaailashsharma/',
        'kailash-sharma.jpg'
      ],
      [
        'Rajesh Hadiya',
        'Build your first Kotlin compiler plugin',
        'https://www.linkedin.com/in/hadiyarajesh/',
        'rajesh-hadiya.jpg'
      ],
      [
        'Gaurav Thakkar',
        'Dependency management in multi-module project',
        'https://www.linkedin.com/in/gaurav-thakkar/',
        'gaurav-thakkar.jpg'
      ],
      [
        'Tarun Mehta',
        'Mobile system design',
        'https://www.linkedin.com/in/tarun-mehta-8541016b/',
        'tarun-mehta.jpg'
      ]
    ],
    photos: [
      'photo-01.webp',
      'photo-02.webp',
      'photo-03.webp',
      'photo-04.webp',
      'photo-05.webp',
      'photo-06.webp'
    ]
  }
];

const speakerPhoto = (file) => `${ASSETS}speakers/${file}`;
const meetupPhoto = (number, file) => `${ASSETS}meetup-${number}/${file}`;

const list = document.querySelector('#meetup-list');
const mapPin = `<svg class="map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
const recordingIcon = `<svg class="recording-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/></svg>`;
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
  return `<button class="photo-button" type="button" data-photo="${src}" data-alt="${alt}" aria-label="Open ${alt}"><img src="${src}" alt="${alt}" loading="lazy" /></button>`;
};

if (list) {
  list.innerHTML = meetups
    .map(
      (meetup, index) =>
        `<article class="meetup ${index === 0 ? 'is-open' : ''}"><span class="meetup-mark" aria-hidden="true">${meetup.number}</span><div class="meetup-card"><button class="meetup-trigger" type="button" aria-expanded="${index === 0}" aria-controls="meetup-${meetup.number}"><span class="meetup-title-row"><span class="meetup-title">Meetup #${meetup.number}</span><span class="city-chip">${mapPin} ${meetup.city}</span></span><span class="meetup-meta"><span class="meetup-date">${dateMarkup(meetup.date)}</span><span class="chevron" aria-hidden="true">⌄</span></span></button><div class="venue">${mapPin}<span class="venue-label">Venue</span><a href="${meetup.map}" target="_blank" rel="noreferrer">${meetup.venue}</a></div><div class="meetup-panel" id="meetup-${meetup.number}" ${index === 0 ? '' : 'hidden'}><div><p class="panel-label">Speakers</p><div class="speaker-grid">${meetup.speakers.map(speakerMarkup).join('')}</div></div><div><p class="panel-label">Photos</p><div class="photo-strip">${meetup.photos.map((photo, photoIndex) => photoMarkup(photo, meetup, photoIndex)).join('')}</div></div>${meetup.recording ? `<a class="recording-link" href="${meetup.recording}" target="_blank" rel="noreferrer">${recordingIcon}<span>Watch recordings</span></a>` : ''}</div></div></article>`
    )
    .join('');

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

  list.addEventListener('click', (event) => {
    const card = event.target.closest('.meetup-card');
    if (!card) return;
    const interactiveChild = event.target.closest(
      'a, .photo-button, .recording-link'
    );
    if (interactiveChild) return;
    const meetup = card.closest('.meetup');
    setMeetupOpen(meetup, !meetup.classList.contains('is-open'));
  });

  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCount = document.querySelector('#lightbox-count');
  const lightboxDots = document.querySelector('#lightbox-dots');
  let gallery = [];
  let activePhoto = 0;
  const showPhoto = () => {
    const item = gallery[activePhoto];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightboxCount.textContent = `${activePhoto + 1} / ${gallery.length}`;
    lightboxDots.innerHTML = gallery
      .map(
        (_, index) =>
          `<button type="button" class="lightbox-dot${index === activePhoto ? ' is-active' : ''}" role="tab" aria-label="Show photo ${index + 1}" aria-selected="${index === activePhoto}"></button>`
      )
      .join('');
    document.querySelector('[data-lightbox-prev]').disabled =
      gallery.length < 2;
    document.querySelector('[data-lightbox-next]').disabled =
      gallery.length < 2;
  };
  const movePhoto = (direction) => {
    if (gallery.length < 2) return;
    activePhoto = (activePhoto + direction + gallery.length) % gallery.length;
    showPhoto();
  };
  list.addEventListener('click', (event) => {
    const button = event.target.closest('.photo-button');
    if (!button) return;
    gallery = [
      ...button.closest('.photo-strip').querySelectorAll('.photo-button')
    ].map((node) => ({ src: node.dataset.photo, alt: node.dataset.alt }));
    activePhoto = [
      ...button.parentElement.querySelectorAll('.photo-button')
    ].indexOf(button);
    showPhoto();
    lightbox.showModal();
    if (embedded) {
      window.parent.postMessage(
        { source: 'droidtribe-static', type: 'lightbox-open' },
        '*'
      );
    }
  });
  document
    .querySelector('[data-close-lightbox]')
    .addEventListener('click', () => lightbox.close());
  document
    .querySelector('[data-lightbox-prev]')
    .addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      movePhoto(-1);
    });
  document
    .querySelector('[data-lightbox-next]')
    .addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      movePhoto(1);
    });
  lightboxDots.addEventListener('click', (event) => {
    const dot = event.target.closest('.lightbox-dot');
    if (!dot) return;
    activePhoto = [...lightboxDots.querySelectorAll('.lightbox-dot')].indexOf(
      dot
    );
    showPhoto();
  });
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  document.addEventListener('keydown', (event) => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowLeft') movePhoto(-1);
    if (event.key === 'ArrowRight') movePhoto(1);
  });
}

const root = document.documentElement;

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

const choices = document.querySelectorAll('[data-theme-choice]');
const storedTheme = localStorage.getItem('droidtribe-theme') || 'dark';
const embedded = new URLSearchParams(location.search).get('embed') === '1';
if (embedded) root.classList.add('is-embedded');
const setTheme = (choice, announce = true) => {
  const actual =
    choice === 'system'
      ? matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : choice;
  root.dataset.theme = actual;
  localStorage.setItem('droidtribe-theme', choice);
  choices.forEach((button) => {
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.themeChoice === choice)
    );
    button.setAttribute(
      'aria-checked',
      String(button.dataset.themeChoice === choice)
    );
  });
  if (embedded && announce) {
    window.parent.postMessage(
      { source: 'droidtribe-static', type: 'theme', theme: actual },
      '*'
    );
  }
};
choices.forEach((button) =>
  button.addEventListener('click', () => setTheme(button.dataset.themeChoice))
);
setTheme(storedTheme);

if (embedded) {
  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    link.search = '?embed=1';
  });
  // Measure the content, never scrollHeight: the parent sizes this iframe from
  // whatever we report, and scrollHeight can never fall below the iframe's own
  // height, so reporting it feeds the height straight back and grows forever.
  const measureEmbedHeight = () => {
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
  let lastEmbedHeight = 0;
  // `force` answers an explicit parent request, which must reply even when the
  // height has not changed since the last (possibly unheard) message.
  const sendEmbedHeight = (force = false) => {
    const height = measureEmbedHeight();
    if (!height || (!force && height === lastEmbedHeight)) return;
    lastEmbedHeight = height;
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
      sendEmbedHeight(true);
      return;
    }
    if (event.data.type === 'viewport' && typeof event.data.top === 'number') {
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
  // This document cannot scroll itself while embedded, so hand jumps to the parent.
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
  const observeHeight = () => sendEmbedHeight();
  new ResizeObserver(observeHeight).observe(document.body);
  new ResizeObserver(observeHeight).observe(document.querySelector('#main'));
  window.addEventListener('load', () => sendEmbedHeight(true));
  sendEmbedHeight(true);
}

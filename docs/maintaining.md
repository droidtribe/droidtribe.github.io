# Maintaining the site

Everything that changes regularly lives in `data/`. The HTML holds the page
structure; the data files hold the content, and the scripts in `js/` render one
from the other.

| File                 | Holds                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `data/site.js`       | Contact address, social links, the YouTube channel, the community link used when the archive is embedded |
| `data/organizers.js` | The people who run DroidTribe                                                                            |
| `data/meetups.js`    | Every meetup, newest first                                                                               |

## Adding a meetup

1. **Photos.** Drop them into `assets/meetup-<n>/` named `photo-01`,
   `photo-02`, … in the order you want them shown. Around 1280px on the long
   edge is plenty; keep each one under about 300KB.

2. **New speakers.** Add headshots to `assets/speakers/` as `first-last.jpg`,
   cropped square around the face at about 400px — they render as small circles,
   so a centre crop of a full-length photo will land on someone's torso.
   Speakers who have spoken before already have a file; reuse it rather than
   adding a second copy. That is why headshots live in one shared folder instead
   of per-meetup ones — most speakers come back.

3. **Data.** Prepend an entry to the `meetups` array in `data/meetups.js`:

```js
{
  number: 8,
  city: 'Pune',
  venue: 'Venue name',
  on: '2027-01-01',
  time: '11 AM - 5 PM',
  map: 'https://maps.app.goo.gl/…',
  recording: 'https://youtube.com/playlist?list=…',
  talks: [
    {
      title: 'Talk title',
      speakers: [
        {
          name: 'Speaker Name',
          url: 'https://www.linkedin.com/in/…',
          photo: 'speaker-name.jpg'
        }
      ]
    }
  ],
  photos: ['photo-01.jpg', 'photo-02.jpg']
}
```

That's the whole job. The hero counts (meetups, cities, talks) and the line
under "Meetups, shared" are all derived from this array, so they update
themselves.

A few details worth knowing:

- **`on` is the date the site reasons about**, `time` is only a label. Keep
  `on` in `YYYY-MM-DD` — it decides the display date and whether the meetup is
  still upcoming.
- **A talk can have more than one speaker.** Put both in the same `speakers`
  array and it stays one talk in the counts, rendered with their headshots
  overlapped and each name linked separately.
- **`recording`** takes a playlist URL, or the string `'soon'` while the videos
  are still being edited — that renders "Recordings coming soon on YouTube"
  pointing at the channel. Leave the key out entirely if there is no recording.
- **`photos` can be empty** if the pictures are not in yet; the Photos section
  is skipped until there is at least one.
- A speaker's `url` is optional — leave it out and the name renders unlinked.
- The name matching `HOST` in `js/archive.js` gets the "Host" chip.

## Announcing a meetup before it happens

Add it like any other, with `on` set to a future date and an `rsvp` link:

```js
{
  number: 8,
  city: 'Pune',
  venue: 'Venue name',
  on: '2027-01-01',
  time: '11 AM - 5 PM',
  map: 'https://maps.app.goo.gl/…',
  rsvp: 'https://lu.ma/…',
  talks: [ … ],
  photos: []
}
```

While `on` is in the future the card carries an "Upcoming" chip, labels its
talks "What's on", shows the RSVP button, and is left out of the hero counts
and the "N gatherings" line — it has not happened yet. Nothing needs switching
off afterwards: the day it passes, it counts.

## Adding the agenda

Optional, per meetup. Rows point at `talks` by index so a title and its
speakers are never written twice:

```js
agenda: [
  {
    start: '11:00',
    end: '11:15',
    title: 'Introduction & Welcome',
    by: 'Organisers'
  },
  { start: '11:15', end: '12:00', talk: 0 },
  { start: '12:45', end: '14:00', title: 'Lunch & Networking', kind: 'break' }
];
```

Times are 24-hour; the site formats them and works out each duration. A row
with `talk` pulls the title, speakers and headshots from that entry. A row
without one is a standalone item — add `kind: 'break'` to tint it. Once a
meetup has an agenda, its card offers "See the agenda".

## Adding or changing an organiser

Add a portrait to `assets/organizers/` and an entry to `data/organizers.js`
with `name`, `title`, `photo` and `bio`. Profiles alternate which side the
photo sits on automatically, so order is the only thing to think about.

## Changing the contact address or social links

Edit `data/site.js` — that is the only place any of it is written down.
`js/site.js` applies it to every page through `data-site-*` hooks:

| Hook                  | Filled with                                           |
| --------------------- | ----------------------------------------------------- |
| `data-site-name`      | `site.name`                                           |
| `data-site-email`     | `site.email`, as both the link text and the `mailto:` |
| `data-site-youtube`   | `site.youtube`                                        |
| `data-site-community` | `site.parentCommunityUrl`                             |
| `data-site-socials`   | the whole social row, rendered from `site.social`     |
| `data-site-year`      | the current year                                      |

Adding a social link means an entry in `site.social` plus, if it is a network
that is not there yet, an SVG path in the `socialIcons` map at the top of
`js/site.js`.

The pages carry no literal addresses or URLs, so there is nothing to keep in
step. The trade is that these values need JavaScript to appear — same as the
meetup archive and the organiser profiles.

## Where the styles live

One file per area of the page, each carrying its own media queries:

```
css/tokens.css     colours, spacing, type, radii, motion (light + dark)
css/base.css       reset, page ground, shared typography, utilities
css/header.css     sticky header, wordmark, nav and its mobile panel
css/hero.css       hero grid, heading, stat row, CTA
css/about.css      about intro and organiser profiles
css/archive.css    timeline, meetup cards, speakers, photo strip
css/lightbox.css   photo viewer
css/footer.css     footer
css/legal.css      supporting pages
css/embed.css      content-only mode
```

They are linked individually from each page, in that order. Add a new file to
every page's `<head>` if you add one.

## Page layout

`index.html` sits at the root; the supporting pages live in `support/`:

```
index.html
support/contact.html
support/privacy-policy.html
support/terms-of-services.html
```

Because the support pages are one level down, their links to anything shared
are prefixed — `../css/…`, `../js/…`, `../data/…`, `../assets/…`,
`../index.html`. They link to each other with plain relative names. A new page
in `support/` is easiest to start by copying an existing one.

## Brand assets

`assets/brand/` holds the logo and its derivatives:

```
droidtribe-logo-original.JPG  the source file, 1024px
droidtribe-logo.jpg           full lockup, for the README and social previews
mark.png                      just the mark, 256px — header, footer, icon
apple-touch-icon.png          180px
favicon-32.png                32px
```

Everything except the original is generated from it. If the logo changes,
replace the original and regenerate the rest: crop the mark out of the lockup
(excluding the wordmark) for `mark.png`, then resize that down for the icons.

## The photo viewer

Photos open in a viewer with a download button, which saves the file the site
serves — so the copy in `assets/meetup-<n>/` is the copy people get. Around
2048px on the long edge is the balance to aim for: sharp on a high-density
screen and worth downloading, without the multi-megabyte camera originals.

## Content-only mode

Adding `?embed=1` hides the header and footer and shows a "Community" back
link, so another page can host the archive in an iframe. That mode reports its
content height to the host page, accepts a theme from it, and hands in-page
jumps over because the frame cannot scroll itself. See `js/embed.js` and
`css/embed.css`.

## Publishing

`.github/workflows/deploy.yml` publishes the repository to GitHub Pages on every
push to `main`. Nothing is built, so the workflow just uploads the folder.

`.hallmark/` is a local scratch directory and is gitignored — it is not part of
the published site.

Note that GitHub Pages serves with `cache-control: max-age=600` and its CDN
ignores query strings, so a change can take up to ten minutes to appear even
with a new `?v=` on the asset links.

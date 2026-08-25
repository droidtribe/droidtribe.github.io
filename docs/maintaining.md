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

2. **New speakers.** Add headshots to `assets/speakers/`, named after the
   speaker (`first-last.jpg`), roughly square and about 400px. Speakers who have
   spoken before already have a file — reuse it rather than adding a second copy.

3. **Data.** Prepend an entry to the `meetups` array in `data/meetups.js`:

```js
{
  number: 7,
  city: 'Pune',
  venue: 'Venue name',
  date: '1 January, 2027 · 11 AM - 5 PM',
  map: 'https://maps.app.goo.gl/…',
  recording: 'https://youtube.com/playlist?list=…', // omit if there is none
  speakers: [
    ['Speaker Name', 'Talk title', 'https://www.linkedin.com/in/…', 'speaker-name.jpg']
  ],
  photos: ['photo-01.jpg', 'photo-02.jpg']
}
```

That's the whole job. The hero counts (meetups, cities, talks) and the line
under "Meetups, shared" are all derived from this array, so they update
themselves.

Two details worth knowing:

- A speaker's profile URL is optional — pass an empty string and the entry
  renders without a link.
- The name matching `HOST` in `js/archive.js` gets the "Host" chip.

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

## Content-only mode

Adding `?embed=1` hides the header and footer and shows a "Community" back
link, so another page can host the archive in an iframe. That mode reports its
content height to the host page, accepts a theme from it, and hands in-page
jumps over because the frame cannot scroll itself. See `js/embed.js` and
`css/embed.css`.

## Publishing

`.github/workflows/deploy.yml` publishes the repository to GitHub Pages on every
push to `main`. Nothing is built, so the workflow just uploads the folder.

Note that GitHub Pages serves with `cache-control: max-age=600` and its CDN
ignores query strings, so a change can take up to ten minutes to appear even
with a new `?v=` on the asset links.

# DroidTribe

The website for [DroidTribe](https://droidtribe.github.io) — an Android
developer community that runs free, community-led meetups in Pune, Bengaluru and
Mumbai. The site is an archive of every meetup so far: the talks, who gave them,
photos from the day, and links to the recordings.

## Contents

| Path                                                            | What it is                                                      |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| `index.html`                                                    | The whole site — hero, organisers, and the meetup archive       |
| `app.js`                                                        | Meetup data plus the accordion, photo viewer and theme switcher |
| `style.css`                                                     | All styling                                                     |
| `tokens.css`                                                    | Design tokens — colours, spacing, type, radii, motion           |
| `assets/`                                                       | Fonts and images, grouped by what they belong to                |
| `contact.html`, `privacy-policy.html`, `terms-of-services.html` | Supporting pages                                                |

No build step, no dependencies, no framework. Three files and a folder of
assets; every font and image is served from this repository.

## Running it locally

Open `index.html` in a browser, or serve the folder over HTTP so relative paths
behave exactly as they do in production:

```bash
python3 -m http.server 4180
```

Then visit `http://localhost:4180`.

## Assets

```
assets/
  brand/        the DroidTribe mark
  fonts/        Bricolage Grotesque, Hanken Grotesk, JetBrains Mono
  hero/         hero illustration
  organizers/   organiser portraits
  speakers/     speaker headshots, shared across meetups
  meetup-1/ … meetup-6/   photos from each meetup, numbered in display order
```

Speaker headshots live in one shared folder because most speakers appear at more
than one meetup. Meetup photos are per-meetup.

## Adding a meetup

Everything about a meetup lives in the `meetups` array at the top of `app.js`,
newest first. To add one:

1. Drop the photos into `assets/meetup-<n>/` as `photo-01`, `photo-02`, … in the
   order you want them shown. Around 1280px wide is plenty.
2. Add any new speaker headshots to `assets/speakers/`, named after the speaker
   (`first-last.jpg`), roughly square and about 400px.
3. Prepend an entry to `meetups`:

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

4. Update the counts in the hero `.stats` block in `index.html`, and the line
   under the "Meetups, shared" heading if the list of cities changed.

A speaker's profile link is optional — pass an empty string and the entry
renders without a link. The name that matches `HOST` in `app.js` gets the "Host"
chip.

## Design notes

Colours, spacing and type all come from custom properties in `tokens.css`, with
a full set for light and another for dark under `:root[data-theme='dark']`.
Nothing in `style.css` hardcodes a colour, so retheming the site means editing
one file. The theme switcher in the footer writes the visitor's choice to
`localStorage` and defaults to dark.

## Publishing

`.github/workflows/deploy.yml` publishes this folder to GitHub Pages on every
push to `main`. There is nothing to build, so the workflow just uploads the
repository as-is.

## Contributing

Spotted a wrong talk title, a broken link, or a photo you would rather not be
in? Open an issue or email
[care@hadiyarajesh.com](mailto:care@hadiyarajesh.com) — photo removal requests
need no explanation.

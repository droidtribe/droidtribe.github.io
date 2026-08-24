# DroidTribe static archive

A portable, CMS-free snapshot of the DroidTribe community page. All fonts and page media live in `assets/`; only Maps, speaker profiles, and recording links remain external.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static file server.

## Publish with GitHub Pages

The included workflow publishes this folder whenever changes land on `main`. In the GitHub repository, choose **Settings → Pages → Source: GitHub Actions** once. The result will be available at the repository’s GitHub Pages URL.

To publish this as its own repository, move the contents of this folder to the new repository root and change `path: droidtribe-static` to `path: .` in the workflow.

## Use the same archive inside hadiyarajesh.com

The archive supports a content-only mode at `?embed=1`. It hides its own header
and footer, reports its height to the parent page, and receives light/dark theme
changes from the parent. The main website renders this mode at
`/community/droidtribe` through an iframe, so the GitHub Pages archive remains
the single source of truth.

The default iframe source is `https://droidtribe.github.io/?embed=1`. Override
it with `NEXT_PUBLIC_DROIDTRIBE_ARCHIVE_URL` if the archive uses another Pages
URL. To use the root `droidtribe.github.io` address, publish from a repository
named `droidtribe.github.io` owned by the `droidtribe` GitHub account or
organization.

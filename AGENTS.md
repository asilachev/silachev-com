# AGENTS.md

Guidance for AI coding agents, and for humans, working in this repository.

## What this is

The source of [silachev.com](https://silachev.com/), Alex Silachev's personal site: one static page
with his name, a two-sentence intro that links to his work at Valur, and a shelf of his side
projects. The design is the frames "02 — Shelf" and "02 — Shelf · Phone (390)" in the Pencil file
`silachev-com.pen`, in the owner's pen.dev workspace.

## Layout

| Path | Contains |
| --- | --- |
| `site/index.html` | The page: the name, the intro, the shelf (one list item per project: its icon and name in one link, then a line about it) and the contact line |
| `site/styles.css` | Type, colors and layout. Each size is the phone frame's at 390 px and the desktop frame's at 1440 px, linear in between. The shelf has two columns, and four from 1150 px |
| `site/fonts/` | Source Serif 4, Latin subset, under the OFL (`LICENSE-source-serif-4.md`) |
| `site/email.js` | The page's only script: it gives the "Email me" link its `mailto:` address when someone points at, focuses or taps it |
| `site/icons/` | Each project's own icon, copied from its repository, and Valur's gradient mark (`valur.svg`, traced from the owner's image) |
| `.github/workflows/pages.yml` | Deploys `site/` to GitHub Pages on a push to `master` |
| `.githooks/commit-msg` | Checks commit messages (see Commits) |

## Ground rules

- **Static and small.** No framework, no build step, no analytics, no third-party requests. Fonts
  and icons are served from `site/`. The only JavaScript is `site/email.js`.
- **No email address in the source.** The page's HTML and JS never contain the address, so crawlers
  that harvest addresses find nothing; `email.js` puts it together from `data-user` and
  `data-domain`.
- **Same as the design.** Copy, spacing and colors follow frame 02. A visual change here is mirrored
  there, including where the browser wraps the lines at 1440 and 390 px.
- **Readable.** Text on the paper (`#fbf9f4`) meets WCAG AA; a grey added later must be `#6f6a61` or
  darker. Links stay distinguishable without color: they are underlined.
- **Check three widths** before calling a change done: 1440, 1000 and 390 px, with no sideways
  scroll.

## Commits

- **Conventional Commits.** `type(scope)!: summary` with one of `feat fix docs style refactor perf
  test build ci chore revert`. For example `feat: add a project row` or
  `fix(site): keep the nav on one line on phones`.
- **Agents are not co-authors.** Don't add `Co-authored-by` trailers, "Generated with …" lines or
  session links for AI agents, in commits or in pull requests. The author is the person who
  commits.
- `.githooks/commit-msg` enforces both: it rejects a subject that isn't a Conventional Commit and
  strips agent co-author lines. Turn it on once per clone with `git config core.hooksPath .githooks`.
  `.claude/settings.json` turns off Claude Code's own attribution.

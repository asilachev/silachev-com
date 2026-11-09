# AGENTS.md

Guidance for AI coding agents, and for humans, working in this repository.

## What this is

The source of [silachev.com](https://silachev.com/), Alex Silachev's personal site: one static page
with a short intro and an index of side projects. The design is frame "03 — Index" in the Pencil
file `silachev-com.pen`, in the owner's pen.dev workspace.

## Layout

| Path | Contains |
| --- | --- |
| `site/index.html` | The page. Each project is one `<li class="row">` in the index |
| `site/styles.css` | Type, colors and the index grid: a table from 1200 px, a side column below that, stacked under 760 px |
| `site/fonts/` | IBM Plex Sans, Serif and Mono, Latin subset, under the OFL (`OFL.txt`) |
| `site/icons/` | Each project's own icon, copied from its repository |
| `.github/workflows/pages.yml` | Deploys `site/` to GitHub Pages on a push to `master` |
| `.githooks/commit-msg` | Checks commit messages (see Commits) |

## Ground rules

- **Static and small.** No framework, no build step, no JavaScript, no analytics, no third-party
  requests. Fonts and icons are served from `site/`.
- **Same as the design.** Copy, spacing and colors follow frame 03. A visual change here is mirrored
  there.
- **Readable.** Text on white meets WCAG AA: the grey is `#767676`, not lighter. Links stay
  distinguishable without color.
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

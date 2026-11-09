# silachev.com

The source of [silachev.com](https://silachev.com/), my personal site. I write software at
[Valur](https://valur.com/), and in my spare time I make small, careful tools for board games and
notes:

- [Thanos Automa](https://thanos.silachev.com/): play Splendor Marvel solo against the fan-made
  Thanos automa.
- [Board Generator for CATAN](https://catan.silachev.com/): fair, shareable boards for the base game
  and all nine Seafarers scenarios.
- [Nord Lane](https://asilachev.github.io/nord-lane-obsidian/): a calm, wide Obsidian theme on the
  Nord palette.

## How it's made

One static page, [`site/index.html`](site/index.html) and [`site/styles.css`](site/styles.css), with
IBM Plex and the projects' icons served from `site/`. No framework, no build step, no JavaScript and
no analytics.

A push to `master` that touches `site/` deploys it to GitHub Pages
([`pages.yml`](.github/workflows/pages.yml)).

## Run it locally

```sh
python3 -m http.server 8000 --directory site
```

Then open <http://localhost:8000>.

## Commits

Commits follow [Conventional Commits](https://www.conventionalcommits.org/), and AI agents are not
listed as co-authors. [`AGENTS.md`](AGENTS.md) has the details. A hook checks both; turn it on once
per clone:

```sh
git config core.hooksPath .githooks
```

## License

The code is [MIT](LICENSE). IBM Plex is under the SIL Open Font License 1.1
([`site/fonts/OFL.txt`](site/fonts/OFL.txt)). The icons belong to their projects.

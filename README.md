# silachev.com

The source of [silachev.com](https://silachev.com/), my personal site.

## How it's made

One static page, [`site/index.html`](site/index.html) and [`site/styles.css`](site/styles.css), with
Source Serif 4 and the icons served from `site/`. No framework, no build step, no JavaScript and no
analytics.

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

The code is [MIT](LICENSE). Source Serif 4 is under the SIL Open Font License 1.1
([`site/fonts/LICENSE-source-serif-4.md`](site/fonts/LICENSE-source-serif-4.md)). The icons belong to
their projects and to Valur.

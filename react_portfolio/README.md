# Portfolio Frontend

Create React App (CRA4 / react-scripts / webpack4) frontend for the personal portfolio site,
built as a static site and deployed to GitHub Pages. Built on the Cruip "open-react-template"
("Strong") landing page template.

## Running locally

```bash
cd react_portfolio
npm install        # or: pnpm install
npm start
```

Opens at `http://localhost:3000` with hot reload.

## Building for production

```bash
npm run build       # or: pnpm run build
```

Produces a static `build/` folder ready to be served by any static host (GitHub Pages, etc.).
The `NODE_OPTIONS=--openssl-legacy-provider` flag needed for webpack4 on Node 17+ is already
baked into the `start`/`build`/`test` scripts via `cross-env`, so no extra setup is required.

## Deployment

`.github/workflows/deploy.yml` builds this app and pushes the `build/` output to the
[`campossrg/campossrg.github.io`](https://github.com/campossrg/campossrg.github.io) repo on every
push to `master` that touches `react_portfolio/`. It authenticates with a `DEPLOY_TOKEN` repo
secret (a personal access token with push access to `campossrg.github.io`).

## Available scripts

- `npm start` — runs the app in development mode with hot reload.
- `npm run build` — builds the app for production into the `build/` folder.
- `npm test` — runs the test runner.
- `npm run eject` — ejects the CRA configuration (one-way operation, not recommended).

## Environment variables

- `REACT_APP_GA_CODE` — Google Analytics tracking code, read by `src/App.js` via
  `ReactGA.initialize(process.env.REACT_APP_GA_CODE)`. Set it in a `.env.local` file
  (not committed) at the root of this project if you want analytics enabled locally:

  ```
  REACT_APP_GA_CODE=UA-XXXXXXXXX-X
  ```

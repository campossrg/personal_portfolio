# Portfolio Frontend

Create React App (CRA4 / react-scripts / webpack4) frontend for the personal portfolio site,
served by the Spring Boot backend in `react_portfolio/` (see `../pom.xml`). Built on the
Cruip "open-react-template" ("Strong") landing page template.

## Requirements

- Node.js `v16.3.0` and npm `v7.16.0` (pinned in `../pom.xml` via the `frontend-maven-plugin`,
  which downloads and uses this exact version automatically during a Maven build).
- If you use a different/newer local Node install (v17+), see the **Node version note** below —
  webpack4 fails on Node 17+ unless you pass a compatibility flag.

## Running locally

### 1. Frontend only, dev mode (hot reload)

```bash
cd react_portfolio/frontend
npm install        # only needed once, or after package.json changes
npm start
```

Opens at `http://localhost:3000` with hot reload.

### 2. Full stack, matching production (frontend served by the Spring Boot backend)

```bash
cd react_portfolio/frontend
npm run build       # produces frontend/build/
cd ..
./mvnw spring-boot:run
```

This builds the React app, then Maven's `copy-resources` step copies `frontend/build` into
`target/classes/static`, and Spring Boot serves the whole app (frontend + mail-sending API)
on `http://localhost:8080`.

## Node version note (OpenSSL / webpack4 on Node 17+)

This project uses `react-scripts` 4 (webpack 4), which is incompatible with the OpenSSL 3
crypto provider used by default in Node 17+. If you're running Node 17+ locally (i.e. not the
`v16.3.0` that the Maven build pins and downloads for you), both `npm start` and `npm run build`
will fail with:

```
Error: error:0308010C:digital envelope routines::unsupported
```

Fix: set `NODE_OPTIONS=--openssl-legacy-provider` before running the command.

```bash
# bash / macOS / Linux / Git Bash
NODE_OPTIONS=--openssl-legacy-provider npm start
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

```powershell
# PowerShell
$env:NODE_OPTIONS = "--openssl-legacy-provider"
npm start
npm run build
```

This flag is **not** baked into `package.json` scripts, because it doesn't exist on Node 16
(the version actually used by the Maven-driven build) and would break that build path.

Alternatively, install and use Node `v16.3.0` locally with `nvm` to match the pinned version
exactly and skip the flag entirely:

```bash
nvm install 16.3.0
nvm use 16.3.0
npm start
```

## Available scripts

- `npm start` — runs the app in development mode with hot reload.
- `npm run build` — builds the app for production into the `build/` folder.
- `npm test` — runs the test runner.
- `npm run eject` — ejects the CRA configuration (one-way operation, not recommended).

## Environment variables

- `REACT_APP_GA_CODE` — Google Analytics tracking code, read by `src/App.js` via
  `ReactGA.initialize(process.env.REACT_APP_GA_CODE)`. Set it in a `.env.local` file
  (not committed) at the root of `frontend/` if you want analytics enabled locally:

  ```
  REACT_APP_GA_CODE=UA-XXXXXXXXX-X
  ```

# Roamster (Tripmeister)

Visual trip planner for multi-stop driving itineraries—search places, map routes, save trips, and attach travel documents.

[Live demo](https://tripmeister.vercel.app/)

## Overview

Roamster (package name **tripmeister**) helps travelers build day-by-day driving routes with Mapbox, manage stops and notes, browse nearby hotels and restaurants, and persist trips with Firebase. The UI is a Next.js single-page experience with list and map views, social login, and document upload to Firebase Storage.

## Features

- Geocoding autocomplete and Mapbox driving directions between stops
- Itinerary list and interactive map with route geometry
- Add, edit, and delete stops; overnight and activity metadata per stage
- Hotel and restaurant POI search near the selected stop
- Trip save/load/update via Firestore; Google and Facebook sign-in
- Travel document upload (tickets, confirmations) to Firebase Storage
- Sidebar trip list with view, edit, and delete actions

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 12, React 18 |
| Maps | Mapbox GL, react-map-gl, Mapbox Geocoding & Directions APIs |
| Backend services | Firebase Auth, Firestore, Storage |
| UI | Tailwind CSS, Material UI (MUI), tailwind-styled-components |
| Dates | date-fns, react-datepicker, react-date-range |

## Prerequisites

- **Node.js** 14+ (LTS recommended)
- **Yarn** (lockfile: `yarn.lock`)
- Mapbox account with a restricted access token
- Firebase project with Authentication (Google/Facebook), Firestore, and Storage enabled

## Getting started

1. Clone and install:

   ```sh
   git clone https://github.com/vonmiller1/Roamster.git
   cd Roamster
   yarn install
   ```

2. Create `.env.local` in the project root (names only—use your own values):

   ```dotenv
   mapbox_key=
   apiKey=
   authDomain=
   projectId=
   storageBucket=
   messagingSenderId=
   appId=
   measurementId=
   ```

   Values are exposed to the browser via `next.config.js` `env`. Enable Google/Facebook providers in Firebase Authentication and authorize your local and production domains.

## Running locally

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Sign in at `/login` to save trips and upload files.

Other scripts:

```sh
yarn build    # production build
yarn start    # serve production build
yarn lint     # ESLint (Next.js config)
```

## Testing

No automated test suite is configured in this repository. Manual checks: sign-in, add stops, save/load a trip, map route display, and document upload after naming a trip.

## Project structure

| Path | Purpose |
|------|---------|
| `pages/` | Next.js routes (`index`, `login`, `_app`, API routes) |
| `components/` | Map, search, itinerary, hotels, trips, upload UI |
| `hooks/` | Mapbox routes, trip data, search, sorting helpers |
| `store/` | React context reducer for global trip/map state |
| `utils/` | Geocoding helpers, formatting, bbox, hotels |
| `styles/` | Global CSS and Tailwind entry |
| `firebase.js` | Firebase init, auth helpers, Firestore utilities |

## Configuration

| Variable | Purpose |
|----------|---------|
| `mapbox_key` | Mapbox API token for geocoding and directions |
| `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId` | Firebase web app config |
| `measurementId` | Optional Firebase Analytics |

Restrict the Mapbox token to required APIs and allowed URLs. Configure Firestore and Storage security rules for your Firebase project—client-side config is not access control.

## Deployment

The public demo runs on [Vercel](https://tripmeister.vercel.app/). Set the same environment variables in the hosting provider. Build command: `yarn build`; output: Next.js default.

## Contributing

1. Fork the repository and create a feature branch from `main`.
2. Keep commits focused; use clear messages (`fix(map): …`, `docs(readme): …`).
3. Open a pull request with a short description of behavior impact.

## License

No `LICENSE` file is present in this repository. Treat the code as all-rights-reserved unless the owner adds a license.

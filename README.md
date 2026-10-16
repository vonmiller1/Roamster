# Tripmeister

Tripmeister is a visual trip planner for building multi-stop itineraries. Plan driving routes, organize activities and trip notes, find nearby hotels and restaurants, and keep travel documents with a saved trip.

[Open the live app](https://tripmeister.vercel.app/)

## Features

- Search for places and plan driving routes with Mapbox
- View an itinerary as a list or on an interactive map
- Add and edit stops, activities, and notes
- Browse nearby hotel and restaurant suggestions
- Review route distance, driving time, and trip totals
- Sign in with Google or Facebook
- Save trips to Firebase and upload travel documents

## Technology

- Next.js 12 and React 18
- Mapbox Maps, Geocoding, and Directions APIs
- Firebase Authentication, Firestore, and Storage
- Tailwind CSS and Material UI

## Run locally

### Prerequisites

- Node.js and Yarn (the repository includes `yarn.lock`)
- A Mapbox access token
- A Firebase project with Authentication, Firestore, and Storage configured

### Setup

1. Clone the repository and install dependencies:

   ```sh
   git clone https://github.com/vonmiller1/Roamster.git
   cd Roamster
   yarn install
   ```

2. Create a `.env.local` file in the project root and set the values for your services:

   ```dotenv
   mapbox_key=your_mapbox_access_token
   apiKey=your_firebase_api_key
   authDomain=your_firebase_auth_domain
   projectId=your_firebase_project_id
   storageBucket=your_firebase_storage_bucket
   messagingSenderId=your_firebase_messaging_sender_id
   appId=your_firebase_app_id
   measurementId=your_firebase_measurement_id
   ```

   `measurementId` is optional if Firebase Analytics is not configured. The remaining Firebase values are read from `next.config.js`; configure them for the Firebase project you intend to use. Enable the Google and Facebook sign-in providers and authorize your local and deployed domains in Firebase Authentication.

3. Start the development server:

   ```sh
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

Other available scripts:

```sh
yarn build
yarn start
yarn lint
```

## Configuration and security

The app uses Firebase client configuration and a Mapbox token in browser-side requests. These are not substitutes for access control: restrict the Mapbox token to the APIs and origins the app needs, and configure Firebase Authentication, Firestore, and Storage security rules for your project. Do not put Firebase Admin credentials, private keys, or other server secrets in `.env.local` values consumed by this app.

For deployment, provide the same environment variables through your hosting provider's environment settings. The live instance is hosted on Vercel.

## Project layout

- `pages/` — Next.js routes and app setup
- `components/` — itinerary, map, trip, and account interface
- `store/` — shared application state
- `hooks/` — reusable data and UI hooks
- `utils/` — route, location, and formatting helpers

## Optimization roadmap

See [`plan.md`](./plan.md) for a prioritized, code-informed optimization roadmap.

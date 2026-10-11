# Tripmeister

Tripmeister is a mobile-friendly itinerary builder for multi-day road trips. Create and manage routes, accommodations, activities, and travel documents for each stage of a trip. Saved trips are associated with a user account, and stops and routes can be viewed on a topographical map or in a list.

## Live app

[Open Tripmeister](https://tripmeister.vercel.app/)

## Features

- Search for destinations with autocomplete
- Calculate and display a route between the start and end points
- Add, update, and remove route sections
- View stops and routes on a topographical map
- Browse and select hotel or hostel suggestions
- Add activities to each trip stage
- Upload travel documents for trip stages
- View trip statistics, including total and average driving time
- Sign in with Google or Facebook
- Save and manage multiple trips

## Tech stack

- JavaScript (ES6)
- React
- Next.js
- Mapbox GL SDK
- Tailwind CSS
- Material UI
- Google Firebase

## Getting started

1. Clone this repository.
2. Create a Mapbox account and a Firebase project.
3. Add a `.env.local` file with the Mapbox and Firebase credentials required by the application. See `next.config.js` for the expected environment variable names.
4. Install dependencies with `npm install` or `yarn install`.
5. Start the development server with `npm run dev` or `yarn dev`.

## Ideas for future features

- Offer a choice of topographical map styles
- Support hiking and cycling routes
- Show more accommodation details from Google Places
- Allow users to add flights to a trip

## Deployment

The project can be deployed on [Vercel](https://vercel.com/). See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.

# Optimization plan

This roadmap captures focused follow-up improvements identified from the current codebase. It favors measurable performance and reliability gains while preserving the existing trip-planning experience. Items are recommendations, not claims that the underlying application changes have already been implemented.

## Priorities

### P1 — Reuse route details in trip statistics

**Where:** `components/TripStats.js`, `utils/getRideDetails.js`

The statistics view currently requests route details once for the selected itinerary leg, then requests every leg again to calculate total duration and once more to calculate total distance. Fetch each leg's details once per itinerary update and derive both totals from the same results; reuse the selected leg's result when its coordinates match.

**Completion criteria**

- One route-details request per itinerary leg is sufficient to calculate the selected-leg and trip-wide statistics.
- Totals and selected-leg values remain correct when a stop or itinerary changes.
- Empty itineraries and unavailable route results do not leave misleading totals or produce unhandled errors.

### P2 — Stabilize route-fetch callback dependencies

**Where:** `hooks/useGetRoute.js`

The callback closes over the app context but does not read `state.itinerary`; its current dependency causes the callback identity to change on itinerary updates. Remove unused context dependencies (or otherwise make the callback depend only on values it reads) so consumers do not receive needless callback changes.

**Completion criteria**

- The callback remains stable across unrelated itinerary updates.
- Route requests still use the supplied start and stop coordinates.

### P2 — Harden Mapbox request lifecycles

**Where:** Mapbox calls in `hooks/` and `utils/`

Standardize response-status and empty-result handling, surface useful errors to the UI, and cancel or ignore stale requests when a user changes a search or selected stop before a request completes.

**Completion criteria**

- Failed HTTP responses and empty route/search results are handled explicitly.
- An older response cannot overwrite data for a newer search or selection.
- Loading and error states are understandable to users.

### P3 — Profile before expanding code splitting

**Where:** `pages/index.js`, view components under `components/`

The map and several views are already dynamically imported. Measure the initial client bundle before changing the remaining imports; defer additional large, infrequently used panels only when bundle analysis demonstrates a benefit.

**Completion criteria**

- Record a reproducible initial-bundle baseline.
- Any added lazy loading measurably reduces initial JavaScript without introducing disruptive loading behavior.

### P3 — Keep external-service setup explicit

**Where:** `README.md`, deployment configuration

Document the Mapbox and Firebase configuration, keep browser-exposed values limited to client configuration, restrict the Mapbox token, and maintain Firebase security rules for user-owned trip data and uploaded files.

**Completion criteria**

- A new contributor can configure a local instance from the README.
- No service-account credential or private server key is required in the client app.
- Firebase access is governed by project security rules.

## Suggested implementation sequence

1. Establish request-count and route-statistics behavior for a small itinerary.
2. Implement P1 and confirm the request reduction and unchanged displayed totals.
3. Stabilize the route callback and add explicit request lifecycle handling.
4. Measure the production client bundle before considering further code splitting.
5. Revisit the priorities as the app and its service integrations evolve.

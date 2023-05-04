# tracking-map

This is the client application of tracking system.

## Setup

First of all, you need to have Node.js installed. If you use `nvm` run the following command:

```shell
nvm install
```

Then install all dependencies:

```shell
npm install
```

Before starting the app you have to fill the environment variables. Follow the instruction to create appropriate file or use `.env`.
You need to obtain [API Key for Google Maps Platform](https://developers.google.com/maps/get-started).

## Development mode

To run the app in the development mode run the following command:

```shell
npm start
```

Open http://localhost:3000 to view it in your browser.

## Things to improve

- The map is re-rendered with each update of points. It provides performance and UX issues.
- Updating the state `points` based on events coming from the Socket.io server should be done more elegantly. I had to leave out one of the dependencies in the dependencies table of `useEffect`.
- Interacting with Socket.io should be hidden behind an abstraction.
- Debouncing user typing in the search input should be added to improve UX.
- It would be nice to hide data from environment variables on the backend. Currently, eg API Key for Google Maps is included in the application bundle.
- I created `src/services/tracking-map-api.ts` unnecessarily, so it would be nice to tidy up. Finally, I based all communication on the Socket.io server.
- Tests should be added.

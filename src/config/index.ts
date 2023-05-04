const config: Config = {
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  mapOptions: {
    center: { lat: 54.4297342, lng: 18.4897076 },
    zoom: 10,
  },
  trackingMapApiUrl: process.env.REACT_APP_TRACKING_MAP_API_URL || "",
};

export default config;

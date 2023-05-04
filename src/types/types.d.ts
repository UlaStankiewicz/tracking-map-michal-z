interface Config {
  googleMapsApiKey: string;
  mapOptions: {
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  };
  socketIoUrl: string;
  trackingMapApiUrl: string;
}

interface Point {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

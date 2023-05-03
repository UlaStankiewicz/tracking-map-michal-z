import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import { Map } from "./components/Map/Map";

import "./App.css";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
const tricityCoords = { lat: 54.4297342, lng: 18.4897076 };
const zoom = 10;

function App() {
  return (
    <Wrapper apiKey={apiKey}>
      <Map center={tricityCoords} zoom={zoom} />
    </Wrapper>
  );
}

export default App;

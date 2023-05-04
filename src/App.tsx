import React, { Fragment } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import { Map } from "./components/Map/Map";
import { Search } from "./components/Search/Search";

import "./App.css";
import { PointList } from "./components/PointList/PointList";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
const tricityCoords = { lat: 54.4297342, lng: 18.4897076 };
const zoom = 10;

function App() {
  return (
    <Fragment>
      <Wrapper apiKey={apiKey}>
        <Map center={tricityCoords} zoom={zoom} />
      </Wrapper>
      <Search />
      <PointList />
    </Fragment>
  );
}

export default App;

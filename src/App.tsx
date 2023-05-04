import React, { Fragment, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import { Map } from "./components/Map/Map";
import { PointList } from "./components/PointList/PointList";
import { Search } from "./components/Search/Search";

import "./App.css";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
const tricityCoords = { lat: 54.4297342, lng: 18.4897076 };
const zoom = 10;

const mockedPoints: Point[] = [
  {
    id: 1,
    name: "Car #1",
    lat: 54.4297342,
    lng: 18.4897076,
  },
  {
    id: 2,
    name: "Car #2",
    lat: 54.4097342,
    lng: 18.4097076,
  },
];

function App() {
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearchChange = (nextValue: string) => {
    setSearchPhrase(nextValue);
  };

  const getFilteredPoints = () => {
    return mockedPoints.filter(({ name }) => name.includes(searchPhrase));
  };

  const displayedPoints =
    searchPhrase.length > 0 ? getFilteredPoints() : mockedPoints;

  return (
    <Fragment>
      <Wrapper apiKey={apiKey}>
        <Map center={tricityCoords} points={displayedPoints} zoom={zoom} />
      </Wrapper>
      <Search onChange={handleSearchChange} searchPhrase={searchPhrase} />
      <PointList points={mockedPoints} />
    </Fragment>
  );
}

export default App;

import React, { Fragment, useEffect, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import config from "./config";
import { Map } from "./components/Map/Map";
import { PointList } from "./components/PointList/PointList";
import { Search } from "./components/Search/Search";
import { fetchPoints } from "./services/tracking-map-api";

import "./App.css";

const {
  googleMapsApiKey,
  mapOptions: { center, zoom },
} = config;

function App() {
  const [points, setPoints] = useState<Point[]>([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetchPoints();

      setPoints(data);
    })();
  }, []);

  const handleSearchChange = (nextValue: string) => {
    setSearchPhrase(nextValue);
  };

  const getFilteredPoints = () => {
    return points.filter(({ name }) => name.includes(searchPhrase));
  };

  const displayedPoints =
    searchPhrase.length > 0 ? getFilteredPoints() : points;

  return (
    <Fragment>
      <Wrapper apiKey={googleMapsApiKey}>
        <Map center={center} points={displayedPoints} zoom={zoom} />
      </Wrapper>
      <Search onChange={handleSearchChange} searchPhrase={searchPhrase} />
      <PointList points={points} />
    </Fragment>
  );
}

export default App;

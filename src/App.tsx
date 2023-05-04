import React, { Fragment, useEffect, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
// @ts-ignore
import io from "socket.io-client";

import config from "./config";
import { Map } from "./components/Map/Map";
import { PointList } from "./components/PointList/PointList";
import { Search } from "./components/Search/Search";

import "./App.css";

const {
  googleMapsApiKey,
  mapOptions: { center, zoom },
  socketIoUrl,
} = config;

function App() {
  const [points, setPoints] = useState<Point[]>([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [lastUpdatedPoint, setLastUpdatedPoint] = useState<Point | null>(null);

  useEffect(() => {
    const socket = io(socketIoUrl);

    const onCarsEvent = (data: Point[]) => {
      setPoints(data);
    };

    const onCarPositionChanged = (data: Point) => {
      setLastUpdatedPoint(data);
    };

    socket.on("connect", () => {
      socket.send("cars");
    });

    socket.on("cars", onCarsEvent);

    socket.on("carPositionChanged", onCarPositionChanged);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (points.length > 0 && lastUpdatedPoint) {
      const nextPoints = points.map((point) => {
        if (point.id === lastUpdatedPoint.id) {
          return lastUpdatedPoint;
        }

        return point;
      });

      setPoints(nextPoints);
    }
  }, [lastUpdatedPoint]);

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

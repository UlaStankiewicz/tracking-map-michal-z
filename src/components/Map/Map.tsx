import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./Map.css";

interface Props {
  center: google.maps.LatLngLiteral;
  points: Point[];
  zoom: number;
}

export const Map = ({ center, points, zoom }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  let mapContainer = document.getElementById("map");

  if (!mapContainer) {
    const rootContainer = document.getElementById("root");
    mapContainer = document.createElement("div");
    mapContainer.setAttribute("id", "map");

    document.body.insertBefore(mapContainer, rootContainer);
  }

  useEffect(() => {
    const googleMaps = window.google.maps;

    const map = new window.google.maps.Map(mapRef.current as HTMLDivElement, {
      center,
      zoom,
    });


    points.map(({name, lat, lng}) => {
      const marker = new googleMaps.Marker({position: {lat, lng}, title: name});
      marker.setMap(map);
    })
  });

  return createPortal(<div className="Map" ref={mapRef} />, mapContainer);
};

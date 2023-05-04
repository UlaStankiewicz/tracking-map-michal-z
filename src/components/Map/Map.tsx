import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./Map.css";

interface Props {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

export const Map = ({ center, zoom }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  let mapContainer = document.getElementById("map");

  if (!mapContainer) {
    const rootContainer = document.getElementById("root");
    mapContainer = document.createElement("div");
    mapContainer.setAttribute("id", "map");

    document.body.insertBefore(mapContainer, rootContainer);
  }

  useEffect(() => {
    new window.google.maps.Map(mapRef.current as HTMLDivElement, {
      center,
      zoom,
    });
  });

  return createPortal(<div className="Map" ref={mapRef} />, mapContainer);
};

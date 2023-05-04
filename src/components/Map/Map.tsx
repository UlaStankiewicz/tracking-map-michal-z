import { createPortal } from "react-dom";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useEffect, useRef } from "react";

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

    const map = new googleMaps.Map(mapRef.current as HTMLDivElement, {
      center,
      zoom,
    });

    const markers = points.map(({ name, lat, lng }) => {
      return new googleMaps.Marker({
        position: { lat, lng },
        title: name,
      });
    });

    new MarkerClusterer({ markers, map });
  }, [center, points, zoom]);

  return createPortal(<div className="Map" ref={mapRef} />, mapContainer);
};

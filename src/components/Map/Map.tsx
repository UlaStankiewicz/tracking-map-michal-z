import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./Map.css";

interface Props {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

export const Map = ({ center, zoom }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new window.google.maps.Map(mapRef.current as HTMLDivElement, {
      center,
      zoom,
    });
  });

  return createPortal(<div className="Map" id="map" ref={mapRef} />, document.body);
};

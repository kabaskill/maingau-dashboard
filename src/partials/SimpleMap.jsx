import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function SimpleMap({ posX, posY }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const glasfaserChance = Math.random() > 0.5;

  // Custom hook to update map center when marker position changes
  function SetViewOnClick({ center }) {
    const map = useMap();
    useEffect(() => {
      map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
  }

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [posX, posY]);

  return (
    <MapContainer
      center={[posX, posY]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[posX, posY]} ref={markerRef}>
        <Popup>
          {glasfaserChance ? (
            <p>
              Glasfaser Available <br />{" "}
              <a href="https://www.maingau-energie.de/internet/glasfaser">Check out offers</a>
            </p>
          ) : (
            <p>
              Not Available <br />{" "}
              <a href="https://www.maingau-energie.de/internet/glasfaser">Make a Request</a>
            </p>
          )}
        </Popup>
      </Marker>
      <SetViewOnClick center={[posX, posY]} />
    </MapContainer>
  );
}

export default SimpleMap;

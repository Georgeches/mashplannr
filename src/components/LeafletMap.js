import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = ({ currentMerchant }) => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const mapStyle = {
    width: "100%", // Occupy entire width of the parent container
    height: "50vh", // Occupy the full viewport height
  };

  useEffect(() => {
    // Get merchant's current location using geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("location succesful");
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error fetching current location:", error);
      }
    );
  }, []);

  return (
    <div className="leaflet-container">
      <MapContainer
        // center={[[currentLocation.lat, currentLocation.lng]]}
        zoom={13}
        style={mapStyle}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[currentLocation.lat, currentLocation.lng]}>
          <Popup>Current Location for {currentMerchant?.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;

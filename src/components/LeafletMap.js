import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = ({ currentMerchant }) => {
  const [currentLocation, setCurrentLocation] = useState(0, 0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const mapStyle = {
    width: "100%", // Occupy entire width of the parent container
    height: "50vh", // Occupy the full viewport height
  };

  useEffect(() => {
    // Get merchant's current location using geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.error("Error fetching current location:", error);
      }
    );
  }, []);

  console.log(`currentLocation`, currentLocation);

  return (
    <div className="leaflet-container">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>

      {/* <MapContainer
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
      </MapContainer> */}
    </div>
  );
};

export default LeafletMap;

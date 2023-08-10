import React, { useState, useEffect } from "react";

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
    </div>
  );
};

export default LeafletMap;

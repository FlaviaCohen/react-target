import { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, MapConsumer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Icon } from 'leaflet';
import marker from 'assets/marker.svg';

const markerIcon = new Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

const Map = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  const setCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      null,
      { enableHighAccuracy: true }
    );
  };

  useEffect(() => {
    setCurrentLocation();
  }, []);

  return (
    <MapContainer className="map__container" center={position} zoom={3}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={markerIcon}></Marker>
    </MapContainer>
  );
};

export default Map;

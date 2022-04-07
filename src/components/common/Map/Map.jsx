import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Icon } from 'leaflet';
import marker from 'assets/marker.svg';

import { usePosition } from 'hooks/usePosition';

const myIcon = new Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

const Map = () => {
  const [position, setPosition] = useState({
    lat: '0',
    lng: '0',
  });

  const [zoom, setZoom] = useState(2);

  const location = usePosition();
  useEffect(() => {}, []);

  return (
    <MapContainer className="map__container" center={position} zoom={zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={myIcon}></Marker>
    </MapContainer>
  );
};

export default Map;

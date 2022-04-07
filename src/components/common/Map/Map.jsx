import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import marker from 'assets/marker.svg';

const myIcon = new Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

const Map = () => {
  const [position, setPosition] = useState({
    lat: '-34.881092955217724',
    lng: '-56.17717361591464',
  });

  const [zoom, setZoom] = useState(20);

  return (
    <MapContainer className="map__container" center={position} zoom={zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={myIcon}></Marker>
    </MapContainer>
  );
};

export default Map;

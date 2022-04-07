import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import marker from 'assets/marker.svg';

const position = [-34.881092955217724, -56.17717361591464];

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
});

const Map = () => {
  return (
    <div className="map__container">
      <MapContainer className="map__container" center={position} zoom={20}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={myIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

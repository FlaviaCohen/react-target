import LocationMarker from './LocationMarker';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className="map">
      <MapContainer className="map__container" center={[0, 0]} zoom={15}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;

import { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import marker from 'assets/marker.svg';

const markerIcon = new Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

const LocationMarker = () => {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return !position ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here.</Popup>
    </Marker>
  );
};

export default LocationMarker;

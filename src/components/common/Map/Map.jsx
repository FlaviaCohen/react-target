import GoogleMapReact from 'google-map-react';

const Map = () => {
  return (
    <div className="map__container">
      <GoogleMapReact
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      />
    </div>
  );
};

export default Map;

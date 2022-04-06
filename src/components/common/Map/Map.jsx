import GoogleMapReact from 'google-map-react';
import marker from 'assets/marker.svg';
import markerCircle from 'assets/markerCircle.svg';

const Map = () => {
  return (
    <div className="map__container">
      <GoogleMapReact
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <div className="map__marker">
          <img className="map__pointer" src={marker} alt="marker" />
          <img className="map__circle" src={markerCircle} alt="marker circle" />
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default Map;

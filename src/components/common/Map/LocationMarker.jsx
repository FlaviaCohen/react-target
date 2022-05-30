import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from 'context/Store';
import routesPaths from 'routes/routesPaths';
import { Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
//import { useTargetsQuery } from 'services/target/getTargets';
import { useGetTargetsQuery } from 'services/target/target';
import { useTopicsQuery } from 'services/target/topics';
import marker from 'assets/marker.svg';
import newTarget from 'assets/newTarget.svg';

const markerIcon = new Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [53, 69],
});

const targetIcon = new Icon({
  iconUrl: newTarget,
  iconRetinaUrl: newTarget,
  popupAnchor: [-0, -0],
  iconSize: [46, 46],
});

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const [newTarget, setNewTarget] = useState(null);
  const [topics, setTopics] = useState([]);

  const [, dispatch] = useStore();
  const map = useMap();
  const history = useHistory();

  const findLocation = useCallback(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  const handleClick = useCallback(
    e => {
      map.on('click', ev => {
        let latlng = map.mouseEventToLatLng(ev.originalEvent);
        setNewTarget({ lat: latlng.lat, lng: latlng.lng });
        dispatch({ type: 'SET_COORDINATES', payload: { lat: latlng.lat, lng: latlng.lng } });
        history.push(routesPaths.newTarget);
      });
    },
    [map, history, dispatch]
  );

  const { data: topicsList, isSuccess: topicsSuccess } = useTopicsQuery();
  const { data: targetsList, isSuccess: targetsSuccess } = useGetTargetsQuery();

  // AVERIGUAR COMO ESPERAR A TOPICS QUERY PARA CREAR EL ICON
  const handleIcons = id => {
    const helper = {};

    for (let i = 0; i < topicsList.topics.length; i++) {
      helper[topicsList.topics[i].topic.id] = topicsList.topics[i].topic.icon;
    }
    const icon = new Icon({
      iconUrl: helper[id],
      iconRetinaUrl: helper[id],
      popupAnchor: [-0, -0],
      iconSize: [46, 46],
    });
    return icon.iconUrl ? icon : targetIcon;
  };

  useEffect(() => {
    findLocation();
    handleClick();
  }, [findLocation, handleClick]);

  return (
    <>
      {position && (
        <Marker position={position} icon={markerIcon}>
          <Popup>You are here.</Popup>
        </Marker>
      )}
      {newTarget && (
        <Marker position={newTarget} icon={targetIcon}>
          <Popup>You are here.</Popup>
        </Marker>
      )}
      {targetsSuccess &&
        targetsList.targets.map(target => (
          <Marker
            key={target.id}
            position={{ lat: target.target.lat, lng: target.target.lng }}
            icon={topicsSuccess && handleIcons()}
          >
            <Popup>{target.target.title}</Popup>
          </Marker>
        ))}
    </>
  );
};

export default LocationMarker;

/* target:
id: 4867
lat: -39.9522866022469
lng: -71.0720516398353
radius: 300
title: "Milanesa"
topic_id: 19 */

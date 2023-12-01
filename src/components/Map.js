import { useContext } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { CoordinatesContext } from "../context/CoordinatesContext";
import { MarkerContext } from "../context/MarkerContext";

const libraries = ['places'];
const mapContainerStyle = {
  width: '48.5vw',
  height: '81vh',
};

const Map = () => {
  const { longitude, latitude } = useContext(CoordinatesContext);
  const { markers } = useContext(MarkerContext);

  const longitudeNum = Number(longitude);
  const latitudeNum = Number(latitude);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <GoogleMap
      className="map"
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={{ lat: latitudeNum, lng: longitudeNum }}
    >
    {markers.map(({id, position}) => {
      return <Marker
        key={id}
        position={position}
      >
      </Marker>
    })}
    </GoogleMap>
  );
}

export default Map;
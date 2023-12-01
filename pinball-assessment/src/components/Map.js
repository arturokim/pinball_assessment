import { useContext } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { CoordinatesContext } from "../context/CoordinatesContext";

const libraries = ['places'];
const mapContainerStyle = {
  width: '48.5vw',
  height: '81vh',
};

const Map = () => {
  const { longitude, latitude } = useContext(CoordinatesContext);
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
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={{ lat: latitudeNum, lng: longitudeNum }}
      >
        <Marker position={{ lat: latitudeNum, lng: longitudeNum }} />
      </GoogleMap>
    </div>
  );
}

export default Map;
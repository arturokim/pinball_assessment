import { useContext, useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  const center = useMemo(() => {
    return { lat: latitudeNum, lng: longitudeNum }
  },[latitudeNum, longitudeNum])

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          className="map"
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
        >
        {markers.map(({ id, position }) => (
          <MarkerF
            key={id}
            position={position}
          />
        ))}
        </GoogleMap>
      )}
    </div>
  );
}

export default Map;
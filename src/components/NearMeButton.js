import { useContext } from "react";
import { Button } from "semantic-ui-react";

import fetchData from '../utils/fetchData';
import { CoordinatesContext } from "../context/CoordinatesContext";
import { MachineContext } from "../context/MachineContext";
import { MarkerContext } from "../context/MarkerContext";
import './NearMeButton.css';

const NearMeButton = ({ isClicked, setIsClicked }) => { 
  const { setLatitude, setLongitude } = useContext(CoordinatesContext);
  const { setMachinesData } = useContext(MachineContext);
  const { setMarkers } = useContext(MarkerContext);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(async(position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      const data = await fetchData(position.coords.latitude, position.coords.longitude);
      const markersData = data.map(({latitude, longitude}, index) => {
        return {
          id: index,
          position: {
            lat: Number(latitude),
            lng: Number(longitude),
          }
        }
      })
      setMarkers(markersData);
      setMachinesData(data);
      if (!isClicked) setIsClicked(true);
    });
  };

  function onClickHandler() {
    getLocation();
  }

  return (
    <Button className="near-button" size="large" onClick={onClickHandler}>Near Me</Button>
  )
}

export default NearMeButton;
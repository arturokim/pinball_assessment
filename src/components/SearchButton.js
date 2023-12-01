import { useContext } from 'react';
import { Button } from 'semantic-ui-react'

import './SearchButton.css'
import fetchData from '../utils/fetchData';
import { MachineContext } from '../context/MachineContext';
import { CoordinatesContext } from '../context/CoordinatesContext';
import { MarkerContext } from '../context/MarkerContext';

const SearchButton = ({ isClicked, setIsClicked, }) => {
  const { latitude, longitude } = useContext(CoordinatesContext);
  const { setMachinesData } = useContext(MachineContext)
  const { setMarkers } = useContext(MarkerContext);
  
  const onClickHandler = async() => {
    if (!isClicked) setIsClicked(true);    
    const data = await fetchData(latitude, longitude);
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
  }

  return (
    <Button className="search-button" size="large" onClick={onClickHandler}>Search</Button>
  );
};

export default SearchButton;
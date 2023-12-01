import { useContext } from 'react';
import { Button } from 'semantic-ui-react'

import './SearchButton.css'
import fetchData from '../utils/fetchData';
import { MachineContext } from '../context/MachineContext';
import { CoordinatesContext } from '../context/CoordinatesContext';

const SearchButton = ({ isClicked, setIsClicked, }) => {
  const { latitude, longitude } = useContext(CoordinatesContext);
  const { setMachinesData } = useContext(MachineContext)
  
  const onClickHandler = async() => {
    if (!isClicked) setIsClicked(true);    
    const data = await fetchData(latitude, longitude);
    setMachinesData(data);
  }

  return (
    <Button className="search-button" color="black" size="large" onClick={onClickHandler}>Search</Button>
  );
};

export default SearchButton;
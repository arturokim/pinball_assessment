import { useContext } from "react";
import { Input } from "semantic-ui-react";

import { CoordinatesContext } from "../context/CoordinatesContext";
import './NumberInput.css';

const LongitudeInput = () => {
  const { longitude, setLongitude } = useContext(CoordinatesContext);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    setLongitude(userInput);
  }

  return (
    <div className="longitude">
      <label htmlFor="longitude" id="longitude">Longitude</label>
      <Input type="number" value={longitude} id="longitude" name="longitude" onChange={onChangeHandler} />
    </div>
  )
}

export default LongitudeInput;
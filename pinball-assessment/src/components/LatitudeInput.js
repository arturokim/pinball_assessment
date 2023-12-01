import { useContext } from "react";
import { Input } from "semantic-ui-react";

import { CoordinatesContext } from "../context/CoordinatesContext";
import './NumberInput.css';

const LatitudeInput = () => {
  const { latitude, setLatitude } = useContext(CoordinatesContext)

  const onChangeHandler = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    setLatitude(userInput);
  }

  return (
    <div className="latitude">
      <label htmlFor="latitude" id="latitude">Latitude</label>
      <Input type="number" value={latitude} id="latitude" name="latitude" onChange={onChangeHandler} />
    </div>
  )
}

export default LatitudeInput;
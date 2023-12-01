import { useState, useEffect, useContext } from "react";
import { Input } from "semantic-ui-react";

import { CoordinatesContext } from "../context/CoordinatesContext";
import './NumberInput.css';

const LongitudeInput = () => {
  const { setLongitude } = useContext(CoordinatesContext);

  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLongitude(debouncedInputValue)
    }, 500);
    return () => clearTimeout(timeout)
  }, [debouncedInputValue, setLongitude]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    setDebouncedInputValue(userInput);
  }

  return (
    <div className="longitude">
      <label htmlFor="longitude" id="longitude">Longitude</label>
      <Input type="number" value={debouncedInputValue} id="longitude" name="longitude" onChange={onChangeHandler} />
    </div>
  )
}

export default LongitudeInput;
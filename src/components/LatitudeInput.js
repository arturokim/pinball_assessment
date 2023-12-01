import { useState, useContext, useEffect } from "react";
import { Input } from "semantic-ui-react";

import { CoordinatesContext } from "../context/CoordinatesContext";
import './NumberInput.css';

const LatitudeInput = () => {
  const { setLatitude } = useContext(CoordinatesContext);

  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLatitude(debouncedInputValue)
    }, 500);
    return () => clearTimeout(timeout)
  }, [debouncedInputValue, setLatitude]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    setDebouncedInputValue(userInput);
  }

  return (
    <div className="latitude">
      <label htmlFor="latitude" id="latitude">Latitude</label>
      <Input type="number" value={debouncedInputValue} id="latitude" name="latitude" onChange={onChangeHandler} />
    </div>
  )
}

export default LatitudeInput;
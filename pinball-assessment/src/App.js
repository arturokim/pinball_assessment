import { useState } from 'react';

import LandingPage from './components/LandingPage';
import MapContainer from './containers/MapContainer';

import { MachineContext } from './context/MachineContext';
import { CoordinatesContext } from './context/CoordinatesContext';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = () => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [machinesData, setMachinesData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const machinesCtxValue = { machinesData, setMachinesData }

  const coordinatesCtxValue = { longitude, latitude, setLongitude, setLatitude }

  return (
    <MachineContext.Provider value={machinesCtxValue}>
    <CoordinatesContext.Provider value={coordinatesCtxValue}>
      <div className="app">
        <div className={ isClicked ? "landing-page" : "landing-page-no-h" }>
          <LandingPage 
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
          { isClicked && <MapContainer /> }
        </div>
      </div>
    </CoordinatesContext.Provider>
    </MachineContext.Provider>
  )
};

export default App;

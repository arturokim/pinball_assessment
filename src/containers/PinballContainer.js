import { useContext } from 'react';

import PinballLocation from '../components/PinballLocation';
import { MachineContext } from '../context/MachineContext';
import './PinballContainer.css';

const PinballContainer = () => {
  const { machinesData } = useContext(MachineContext);

  return (
    <div className="pinball-container" >
      { machinesData && machinesData.map((machineData, index) => (
        <PinballLocation key={index} machineData={machineData} />
      ))}
    </div>
  );
};

export default PinballContainer;
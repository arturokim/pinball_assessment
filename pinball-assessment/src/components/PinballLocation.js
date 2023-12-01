import { Segment } from 'semantic-ui-react';

import PinballMachine from './PinballMachine';
import './PinballLocation.css'; 

const PinballLocation = ({ machineData }) => {
  return (
    <Segment.Group className="pinball">
      <Segment className="information" size="big">{machineData.name} - {machineData.address}</Segment>
        {machineData.machines.map((machine, index) => (
          <PinballMachine key={index} name={machine}/>
        ))}
    </Segment.Group>
  );
};

export default PinballLocation;
import { Segment } from "semantic-ui-react";

import './PinballMachine.css';

const PinballMachine = ({ name }) => {
  return (
    <Segment className="machine" size="large">
      {name}
    </Segment>
  )
}

export default PinballMachine;
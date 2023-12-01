import { Header } from "semantic-ui-react";

import './Message.css';

const Message = () => {
  return (
    <Header as="h1" className="message">Please enter your coordinates to find your nearest pinball machines!</Header>
  )
}

export default Message;
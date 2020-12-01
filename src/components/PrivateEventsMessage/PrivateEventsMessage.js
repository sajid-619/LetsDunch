import React from 'react';
import './PrivateEventsMessage.css';

const PrivateEventsMessage = () => {
  return (
    <div id="message" className="privateEventsMessage">
      <div className="container">
        <h3>Our private events team is here to help you!</h3>
        <h4>
          We are a passionate team that loves attending these events and testing
          them for you <br /> Feel free to consult us!
        </h4>
        <button>Send us a message</button>
      </div>
    </div>
  );
};

export default PrivateEventsMessage;

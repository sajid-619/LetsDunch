import { Avatar, Button, Tooltip } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import avatar from '../../../img/avatar.png';
import ChatIcon from '@material-ui/icons/Chat';

const Peoples = ({ isAuthenticated, name }) => {
  const [connect, setConnect] = useState(false);
  return (
    <div className="d-flex align-items-center justify-content-between my-4">
      <div className="d-flex align-items-center justify-content-between">
        <Avatar src={avatar} alt="Jemy Nessam" />
        <span style={{ marginLeft: '20px' }}>{name}</span>
      </div>
      <div className="communication-section">
        {isAuthenticated ? (
          <Fragment>
            <Button
              onClick={() => setConnect(!connect)}
              className="authenticated-button"
              variant="outlined"
            >
              {connect ? 'Pending...' : 'Connect'}
            </Button>
            <Tooltip title="Please connect to chat">
              <ChatIcon className="authenticated-icon" />
            </Tooltip>
          </Fragment>
        ) : (
          <Fragment>
            <Button className="communication-button" variant="outlined">
              Connect
            </Button>
            <ChatIcon className="communication-icon" />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Peoples;

import React from 'react';
import { Avatar, Modal } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import avatar from '../../../img/avatar.png';
import './EventJoinedPeople.css';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';
import Peoples from './Peoples';

function getModalStyle() {
  const top = 55;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '50%',
    height: '60vh',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const EventJoinedPeople = () => {
  const auth = useSelector((state) => state.auth);

  const { isAuthenticated } = auth;

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="d-flex align-items-center justify-content-between">
        <h2>Joined Peoples in this event</h2>
        <span
          style={{
            cursor: 'pointer',
            fontSize: '25px',
            padding: '20px',
          }}
          onClick={handleClose}
          className="close"
        >
          &times;
        </span>
      </div>
      <div>
        {!isAuthenticated && (
          <span className="unAuthenticated-message">
            Please Login to connect !!!
          </span>
        )}

        <Peoples key="1" name="Jemy Nessam" isAuthenticated={isAuthenticated} />
        <Peoples key="2" name="Tom Banton" isAuthenticated={isAuthenticated} />
        <Peoples key="3" name="Eion Morgan" isAuthenticated={isAuthenticated} />
        <Peoples
          key="4"
          name="Rahul Tripathi"
          isAuthenticated={isAuthenticated}
        />
        <Peoples key="5" name="Subman Gill" isAuthenticated={isAuthenticated} />
        <Peoples
          key="6"
          name="Andress Russel"
          isAuthenticated={isAuthenticated}
        />
        <Peoples key="7" name="Pet Cummins" isAuthenticated={isAuthenticated} />
        <Peoples
          key="8"
          name="Dinesh Karttik"
          isAuthenticated={isAuthenticated}
        />
      </div>
    </div>
  );
  return (
    <div className="joined-people my-5">
      <p>10 People joined </p>
      <div onClick={handleOpen} className="peoples">
        <AvatarGroup max={8}>
          <Avatar alt="Jemy Sharp" src={avatar} />
          <Avatar alt="Remy Sharp" src={avatar} />
          <Avatar alt="Kemy Sharp" src={avatar} />
          <Avatar alt="Zemy Sharp" src={avatar} />
          <Avatar alt="Jhon Sharp" src={avatar} />
          <Avatar alt="David Sharp" src={avatar} />
          <Avatar alt="Tom Sharp" src={avatar} />
          <Avatar alt="Howel Sharp" src={avatar} />
          <Avatar alt="Morgan Sharp" src={avatar} />
          <Avatar alt="Russel Sharp" src={avatar} />
          <Avatar alt="Mavi Sharp" src={avatar} />
          <Avatar alt="Gill Sharp" src={avatar} />
        </AvatarGroup>
      </div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default EventJoinedPeople;

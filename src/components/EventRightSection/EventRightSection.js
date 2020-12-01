import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import './EventRightSection.css';
import ShareIcon from '@material-ui/icons/Share';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { ChevronRight } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import avatar from '../../img/avatar.png';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    width: '70%',
    height: '60vh',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const EventRightSection = () => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const [openHost, setOpenHost] = React.useState(false);

  const handleOpenHost = () => {
    setOpenHost(true);
  };
  const handleCloseHost = () => {
    setOpenHost(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="d-flex align-items-center justify-content-between">
        <h2>Book your seats</h2>
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
      <div className="container">
        <div className="price-review-container my-4">
          <p className="price-container">
            <span className="price">AED 200</span> price per guest
          </p>
          <span className="start">
            4.9/5 <StarIcon className="starIcon" /> (310)
          </span>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p>Date *</p>
            <div className="search-box">
              <DateRangeIcon htmlFor="date" />
              <DatePicker
                id="date"
                selected={startDate}
                placeholderText="Select a date"
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <p>Number of Guests *</p>
            <div className="search-box">
              <PeopleAltIcon />
              <select className="select-guest" name="select-guest" id="">
                <option value="null">Guests</option>
                <option value="1">1 Guests</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
                <option value="9">9 Guests</option>
                <option value="10">10 Guests</option>
              </select>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );

  const content = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h4>Contact with Jhon doe</h4>
          <span
            onClick={handleCloseHost}
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            &times;
          </span>
        </div>
        <div>
          <textarea
            style={{ resize: 'none', width: '100%' }}
            placeholder="Write a message..."
            cols="100"
            rows="8"
          ></textarea>
        </div>
        <button
          style={{
            border: 'none',
            background: '#ff595e',
            padding: '8px 22px',
            borderRadius: '5px',
            color: 'white',
            float: 'right',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );

  return (
    <div className="eventRightSection">
      <div className="eventRightSection__container">
        <div className="eventRightSection__request-a-book-section">
          <p className="price-container">
            <span className="price">AED 200</span> price per guest
          </p>
          <span className="start">
            4.9/5 <StarIcon className="starIcon" /> (310)
          </span>
          <h5>Join other guests around a communal table</h5>
          <div className="eventRightSection__button-box">
            <button onClick={handleOpen}>Request a book </button>
          </div>
          <div className="safety-box">
            <span>
              Lets Dunch is committed to caring for the health and well-being of
              our host and guest community.
            </span>
          </div>
        </div>
        <div className="question d-flex align-items-center justify-content-between">
          <p>
            <QuestionAnswerIcon /> Question?{' '}
            <span onClick={handleOpenHost} style={{ cursor: 'pointer' }}>
              Contact the host
            </span>
          </p>
          <span>
            <ChevronRight />
          </span>
        </div>
        <div className="meet-section my-4">
          <div className="meet-top d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Avatar src={avatar} alt="A" /> Meet{' '}
              <span className="meetPersonName">Christina</span>
            </div>
            <div>
              <ChevronRight />
            </div>
          </div>
          <div className="details">
            Welcome to my kitchen! I'm Christina, a professional chef, cookbook
            author, recipe developer, and journalist based in Los
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
      <Modal open={openHost} onClose={handleCloseHost}>
        {content}
      </Modal>
    </div>
  );
};

export default EventRightSection;

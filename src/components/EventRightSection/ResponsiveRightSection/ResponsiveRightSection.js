import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
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
    width: '80%',
    height: '80vh',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ResponsiveRightSection = () => {
  const classes = useStyles();

  const [startDate, setStartDate] = useState(new Date());
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

  return (
    <div>
      <div
        style={{ marginBottom: '0px !important' }}
        className="eventRightSection__request-a-book-section responsive-wrapper"
      >
        <div className="left">
          <p className="price-container">
            <span className="price">AED 200</span> price per guest
          </p>
          <span className="start">
            4.9/5 <StarIcon className="starIcon" /> (310)
          </span>
        </div>
        <div className="right">
          <div className="button-wrapper">
            <button onClick={handleOpen} className="see__dates">
              See dates
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default ResponsiveRightSection;

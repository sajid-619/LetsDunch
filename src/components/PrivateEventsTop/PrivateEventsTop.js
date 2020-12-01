import React, { useState } from 'react';
import './PrivateEventsTop.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DatePicker from 'react-datepicker';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { InputGroup, FormControl } from 'react-bootstrap';

function getModalStyle() {
  const top = 50;
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
    width: '80vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '96px 32px 24px',
    height: '100vh',
    overflowY: 'scroll',
  },
}));

const PrivateEventsTop = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [budget, setBudget] = useState();
  const [city, setCity] = useState('');
  const [peoples, setPeoples] = useState();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city, startDate, budget, peoples);
    handleClose();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="d-flex align-items-center justify-content-between">
        <h5>Craft your exclusive event now</h5>
        <span
          onClick={handleClose}
          style={{ fontSize: '30px', cursor: 'pointer' }}
        >
          &times;
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="city">
            <LocationOnIcon style={{ color: '#ff595e' }} /> Search for a city or
            host
          </label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            type="text"
            class="form-control"
            id="city"
          />
        </div>

        <div class="form-group">
          <label for="date">
            <DateRangeIcon style={{ color: '#ff595e' }} /> Select date when you
            free
          </label>
          <DatePicker
            id="date"
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div class="form-group">
          <label for="budget">
            <LocalAtmIcon style={{ color: '#ff595e' }} /> Budget per guest
          </label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="budget">AED</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="number"
              required
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </InputGroup>
          {/* <input type="number" value={budget} onChange={e => setBudget(e.target.value)} class="form-control" id="budget" /> */}
        </div>
        <div class="form-group">
          <label for="peoples">
            <PeopleAltIcon style={{ color: '#ff595e' }} /> How many will you be?
          </label>
          <input
            value={peoples}
            onChange={(e) => setPeoples(e.target.value)}
            required
            type="number"
            class="form-control"
            id="peoples"
          />
        </div>
        <input
          required
          style={{ background: '#ff595e', color: 'white' }}
          type="submit"
          className="form-control"
          value="Search"
        />
      </form>
    </div>
  );

  return (
    <div className="privateEventsTop">
      <div className="privateEventsTopImage">
        <div className="text-box">
          <h1>Book your Dream Event</h1>
          <h4>
            Gather your closest friends and family for an intimate private{' '}
            <br /> dining experience created just for you
          </h4>
          <div className="container">
            <div className="private-events-search-box">
              <div className="row">
                <div className="col-md-4">
                  <div className="private-search-box">
                    <LocationOnIcon />
                    <input
                      type="text"
                      placeholder="Search for a city or host"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="private-search-box">
                    <DateRangeIcon htmlFor="date" />
                    <DatePicker
                      id="date"
                      selected={startDate}
                      placeholderText="Select a date"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="private-search-box">
                    <LocalAtmIcon />
                    <input type="number" placeholder="Budget per guest" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="private-search-box">
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
                <div className="col-md-1">
                  <button className="search">Search</button>
                </div>
              </div>
            </div>
            <button onClick={handleOpen} className="private-event-button">
              Craft your exclusive event now
            </button>
            <Modal open={open} onClose={handleClose}>
              {body}
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsTop;

import React, { useState, useEffect, useRef } from 'react';
import ExploreSection from '../ExploreSection/ExploreSection';
import SearchIcon from '@material-ui/icons/Search';
import './LandingTopSection.css';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import address from '../../actions/address';
import { Redirect } from 'react-router-dom';
import LandingVideo from './LandingVideo/LandingVideo';

const useFocus = (ref, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = () => setState(false);
    ref.current.addEventListener('focus', onFocus);
    ref.current.addEventListener('blur', onBlur);

    return () => {
      // ref.current.removeEventListener('focus', onFocus);
      // // eslint-disable-next-line react-hooks/exhaustive-deps
      // ref.current.removeEventListener('blur', onBlur);
    };
  }, [ref]);

  return state;
};

const LandingTopSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ref = useRef();
  const focused = useFocus(ref);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [details, setDetails] = useState(null);

  const dispatch = useDispatch();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  function showPosition(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  console.log(lat);
  console.log(long);

  useEffect(() => {
    axios
      .get(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.efbd1f1ba052ef6242c787d2ce250e55&format=json&lat=${lat}&lon=${long}`
      )

      .then((res) => {
        setDetails(res.data.address);
      })
      .catch(function (error) {});

    dispatch(address(details));
  }, [lat, long, details, dispatch]);

  if (details !== null) {
    return <Redirect to={`/nearby/${details.city}`} />;
  }

  return (
    <div className="landing__top">
      <div className="landing-top-video-container">
        <div className="video-wrapper">
          <LandingVideo />
        </div>
        <div className="landing-top-wrapper">
          <div>
            <h1 className="landing-top-title">Avoid the Crowds</h1>
            <h2 className="landing-top-subtitle">
              Book private food events with local worldwide
            </h2>
          </div>

          <div className="landing__search-box">
            <div className="row">
              <div className="col-xl-4">
                <span className="search__title">What are you looking for?</span>
                <div className="search-box">
                  <SearchIcon />
                  <div className={`app ${focused && 'is-focused'}`}>
                    <input
                      ref={ref}
                      type="text"
                      className="search-restaurants"
                      placeholder="Search restaurants, bars or cafe"
                    />
                    <div className="tip">
                      <div className="tip-container">
                        <h5>Find restaurants, bars or cafe near me</h5>

                        <button onClick={getLocation}>
                          <LocationOnIcon /> Explore nearby
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <span className="search__title">When are you available?</span>
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
              <div className="col-xl-3">
                <span className="search__title">How many guest are going?</span>
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
              <div className="col-xl-2">
                <div className="search-box-button-container">
                  <button className="submit--button button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={logo} alt="" className="landing__logo" /> */}

      <div className="container">
        <ExploreSection />
      </div>
    </div>
  );
};

export default LandingTopSection;

// API: pk.efbd1f1ba052ef6242c787d2ce250e55

// https://us1.locationiq.com/v1/reverse.php?key=pk.efbd1f1ba052ef6242c787d2ce250e55&format=json&lat=22.370771599999998&lon=91.8307468

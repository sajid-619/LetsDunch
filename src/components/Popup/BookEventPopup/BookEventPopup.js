import React, { Fragment } from 'react';
import image from '../../../img/thali.jpg';
import './BookEventPopup.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import avatar from '../../../img/avatar.png';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const BookEventPopup = ({ openModel, setOpenModel }) => {
  return (
    <div>
      {openModel && (
        <Fragment>
          <div style={{ opacity: openModel ? 1 : 0 }} className="bookEvent">
            <div className="title-section d-flex align-items-center justify-content-between">
              <h3>DUNCH DETAILS</h3>
              <span onClick={() => setOpenModel(false)}> &times; </span>
            </div>
            <div className="img-box">
              <img src={image} alt="" className="event-image" />
            </div>
            <div className=" px-4 py-3 interested-box d-flex align-items-center justify-content-end">
              <Link to="#">
                <span className="text-primary mx-5">I am interested</span>
              </Link>
              <button className="button submit--button">I want to join</button>
            </div>
            <div className="thali-info-container p-3">
              <h4 className="thali--title">kannadiga Oota (Karnataka Thali)</h4>
              <div className="atc-section">
                <p className="address">
                  <LocationOnIcon className="icon" /> Nathan Outlaw At Al Mahara
                  Burj Al Arab{' '}
                  <Link to="#">
                    <span className="text-primary">Find in on Map</span>
                  </Link>
                </p>
                <p className="address">
                  <ScheduleIcon className="icon" /> Saturday from 20:00-23:00
                </p>
                <p className="address">
                  <AttachMoneyIcon className="icon" /> 200 AED/Person
                </p>
              </div>

              <div className="seats-available my-4">
                <p className="seats-available--title text-secondary">
                  Seats Available
                </p>
                <div className="avatar-row">
                  <div className="avatar-box d-flex align-items-center">
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <ControlPointIcon className="controlPointIcon text-primary" />
                    <ControlPointIcon className="controlPointIcon text-primary" />
                    <ControlPointIcon className="controlPointIcon text-primary" />
                    <ControlPointIcon className="controlPointIcon text-primary" />
                    <ControlPointIcon className="controlPointIcon text-primary" />
                    <ControlPointIcon className="controlPointIcon text-primary" />
                    <ControlPointIcon className="controlPointIcon text-primary" />
                    <ControlPointIcon className="controlPointIcon text-primary" />
                  </div>
                </div>
              </div>
              <div className="interested my-4">
                <p className="interested--title text-secondary">
                  10 Members Interested
                </p>
                <div className="avatar-row">
                  <div className="avatar-box d-flex align-items-center">
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                    <Avatar className="mx-1" alt="" src={avatar} />
                  </div>
                </div>
              </div>
              <div className="description my-4">
                <p className="description--title text-secondary">Description</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  optio ratione praesentium neque harum dicta illo reprehenderit
                  maiores labore fuga expedita totam sunt pariatur dolore enim
                  alias quae, at maxime.
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default BookEventPopup;

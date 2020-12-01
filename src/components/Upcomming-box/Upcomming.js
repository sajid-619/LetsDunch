import React from 'react';
import './Upcomming.css';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Upcomming = ({
  title,
  image,
  joinedPeopleNumber,
  joinedPeopleAvatarLink,
  availableSeats,
  place,
  date,
  cost,
}) => {
  return (
    <div className="upcomming">
      <div className="upcomming-container">
        <div className="img__box">
          <img src={image} alt="upcommingImage" className="upcomming__img" />
        </div>
        <div className="upcomming__date-box">
          <span className="upcomming__date">{date}</span>
        </div>

        <div className="upcomming__info">
          <p className="upcomming__place">{place}</p>
          <h5 className="upcomming__title">{title}</h5>

          <p className="cost">{cost}</p>
          <div className="wrap d-flex align-items-center justify-content-between">
            <div className="joined-box d-flex align-items-center">
              <AvatarGroup max={2}>
                <Avatar alt="Avatar" src={joinedPeopleAvatarLink} />;
                <Avatar alt="Avatar" src={joinedPeopleAvatarLink} />;
                <Avatar alt="Avatar" src={joinedPeopleAvatarLink} />;
              </AvatarGroup>
              <p className="joinedNumber">{joinedPeopleNumber}</p>
            </div>

            <p className="text-primary available">{availableSeats}</p>
          </div>

          <div className="button-box text-center my-3">
            <Link to="/events">
              <button className="button submit--button">Let Dunch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomming;

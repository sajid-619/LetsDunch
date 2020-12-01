import React from 'react';
import './ExpectBox.css';
import StarIcon from '@material-ui/icons/Star';
import { Avatar } from '@material-ui/core';

const ExpectBox = () => {
  return (
    <div className="expectBox">
      <h5>What to expect</h5>
      <div className="review-box">
        <div className="avatar-container">
          <Avatar
            src="https://s28987.pcdn.co/wp-content/uploads/2019/01/ethical-responsible-sustainable-tourism-1.jpg"
            alt="T"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p>5 reviews</p>
        <span>TripAdvisor Traveler Rating</span>
      </div>
    </div>
  );
};

export default ExpectBox;

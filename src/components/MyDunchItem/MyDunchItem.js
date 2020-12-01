import React from 'react';
import './MyDunchItem.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const MyDunchItem = ({ image, title, date, when, color }) => {
  return (
    <div className="myDunchItem d-flex align-items-center my-3">
      <div className="img-container">
        <img src={image} alt={title} className="myDunchImage" />
      </div>
      <div className="info-container">
        <p className="myDunch__title">{title}</p>
        <div
          className={`d-flex align-items-center justify-content-between ${color}`}
        >
          <p className="myDunch__date d-flex align-items-center">
            <FiberManualRecordIcon className="dot" />
            <span>{date}</span>
          </p>
          <p className="myDunch__when">{when}</p>
        </div>
      </div>
    </div>
  );
};

export default MyDunchItem;

import React from 'react';
import './Explore.css';

const Explore = ({ Icon, image, title }) => {
  return (
    <a href="#upcomming">
      <div className="explore d-flex align-items-center">
        <div className="explore-left-box">
          <div className="text-center"><Icon className="explore-icon" /></div>
          <h4 className="explore__title">{title}</h4>
        </div>
        <div className="explore-right-box">
          <div style={{backgroundImage:`url(${image})`}} className="explore-img-box">
            <span className="view-more">View More</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Explore;

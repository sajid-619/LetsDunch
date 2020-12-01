import React from 'react';
import './PrivateEventsReviews.css';
import avatar from '../../img/avatar.png';
import Slider from 'react-slick';

const PrivateEventsReviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="team" className="privateEventsReviews">
      <div className="container">
        <div style={{ marginTop: '45px' }}>
          <Slider {...settings}>
            <div className="review-wrapper">
              <div className="personImage">
                <img className="BulkAvatar" src={avatar} alt="" />
              </div>
              <p style={{ color: '#ff595e' }}>Jhon, London</p>
              <p style={{ color: 'black' }}>
                We wanted a work party that didn't feel like "work"! Eatwith
                madethe process easy and stress - free.The food was impeccable,
                the venue was cool, and their Private Event Manager was so
                helpful. Most successful office party yet!
              </p>
            </div>

            <div className="review-wrapper">
              <div className="personImage">
                <img className="BulkAvatar" src={avatar} alt="" />
              </div>
              <p style={{ color: '#ff595e' }}>David, UK</p>
              <p style={{ color: 'black' }}>
                booked Merav & Ziv's experience for a group of international
                visitors.Everything was perfect! Many of the participants rated
                this dinner event as the highlight of the whole tour.The food
                was great and the hosts and the location perfect! Thank you very
                much for hosting us!
              </p>
            </div>

            <div className="review-wrapper">
              <div className="personImage">
                <img className="BulkAvatar" src={avatar} alt="" />
              </div>
              <p style={{ color: '#ff595e' }}>Christian, Spain</p>
              <p style={{ color: 'black' }}>
                Really wonderful tour and cooking class with Alberto! Went
                shopping at La Boqueria, learned a little about its history and
                about sustainable vendor sourcing in the region. It was our
                first time cleaning and cooking sardines and they were
                delicious. Seriously, beautiful menu and preparation / coaching
                by Alberto.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsReviews;

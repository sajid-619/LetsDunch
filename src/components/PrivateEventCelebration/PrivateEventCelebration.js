import React from 'react';
import './PrivateEventCelebration.css';
import Gallery from 'react-grid-gallery';

const PrivateEventCelebration = () => {
  const IMAGES = [
    {
      src: 'https://i.ibb.co/0hpRTTx/1.jpg',
      thumbnail: 'https://i.ibb.co/0hpRTTx/1.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
      src: 'https://i.ibb.co/gMsVmDJ/2.jpg',
      thumbnail: 'https://i.ibb.co/gMsVmDJ/2.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },

    {
      src: 'https://i.ibb.co/kQSdvq6/3.jpg',
      thumbnail: 'https://i.ibb.co/kQSdvq6/3.jpg',
      thumbnailWidth: 112,
      thumbnailHeight: 78,
    },
    {
      src: 'https://i.ibb.co/7X6xTq5/4.jpg',
      thumbnail: 'https://i.ibb.co/7X6xTq5/4.jpg',
      thumbnailWidth: 160,
      thumbnailHeight: 106,
    },
    {
      src: 'https://i.ibb.co/KNxZzRL/popular-four.jpg',
      thumbnail: 'https://i.ibb.co/KNxZzRL/popular-four.jpg',
      thumbnailWidth: 160,
      thumbnailHeight: 106,
    },
    {
      src: 'https://i.ibb.co/fkfyjn1/thali.jpg',
      thumbnail: 'https://i.ibb.co/fkfyjn1/thali.jpg',
      thumbnailWidth: 160,
      thumbnailHeight: 106,
    },
    {
      src:
        'https://i.ibb.co/kM5WGFX/Happy-young-friends-group-having-lunch-at-home-Asia-family-party-eating-pizza-food-and-laughing-enjo.jpg',
      thumbnail:
        'https://i.ibb.co/kM5WGFX/Happy-young-friends-group-having-lunch-at-home-Asia-family-party-eating-pizza-food-and-laughing-enjo.jpg',
      thumbnailWidth: 160,
      thumbnailHeight: 106,
    },
    {
      src: 'https://i.ibb.co/w79p58s/top-banner-two.jpg',
      thumbnail: 'https://i.ibb.co/w79p58s/top-banner-two.jpg',
      thumbnailWidth: 160,
      thumbnailHeight: 106,
    },
  ];
  return (
    <div className="privateEventCelebration my-5">
      <div className="container">
        <div className="text-center">
          <h4>We are perfect for your next celebration</h4>
          <p className="discover">Discover the best activities in your city</p>
        </div>
        <Gallery images={IMAGES} />
        {/* <div className="row">
          <div className="col-md-5">
            <div
              className="celebration-image"
              style={{ background: `url(${one})` }}
            >
              <h2>BIRTHDAY PARTIES</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="celebration-image"
              style={{ background: `url(${two})` }}
            >
              <h2>CORPORATE DINING</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="celebration-image"
              style={{ background: `url(${three})` }}
            >
              <h2>SEMINAR</h2>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-3">
            <div
              className="celebration-image"
              style={{ background: `url(${four})` }}
            >
              <h2>WORKSHOP</h2>
            </div>
          </div>
          <div className="col-md-5">
            <div
              className="celebration-image"
              style={{ background: `url(${five})` }}
            >
              <h2>BACHELORETTE</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="celebration-image"
              style={{ background: `url(${six})` }}
            >
              <h2>ANY OTHER EXCEPTIONAL EVENT</h2>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PrivateEventCelebration;

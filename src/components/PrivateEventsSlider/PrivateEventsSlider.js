import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import one from '../../img/1.jpg';
import two from '../../img/2.jpg';
import three from '../../img/3.jpg';
import four from '../../img/4.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PrivateEventsSlider.css';

const PrivateEventsSlider = () => {
  return (
    <div className="privateEventSlider my-4">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="intro">
              <h4 style={{ color: '#ff595e' }}>Who we are</h4>
              <h3>
                We are the world's largest culinary platform for immersive
                dining
              </h3>
              <h4 className="text-secondary">
                Exclusive events hosted by passionate hosts
              </h4>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="slider">
              <Carousel autoPlay infiniteLoop>
                <div>
                  <img src={one} alt="" />
                  <p className="legend">A Private event host in New York</p>
                </div>
                <div>
                  <img src={two} alt="" />
                  <p className="legend">A Private event host in Barcelona</p>
                </div>
                <div>
                  <img src={three} alt="" />
                  <p className="legend">A Private event host in Dubai</p>
                </div>
                <div>
                  <img src={four} alt="" />
                  <p className="legend">A Private event host in Dubai</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsSlider;

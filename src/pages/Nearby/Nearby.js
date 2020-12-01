import React from 'react';
import { useParams } from 'react-router-dom';
import Upcomming from '../../components/Upcomming-box/Upcomming';
import avatar from '../../img/avatar.png';
import UpcommingImageOne from '../../img/upcomming-one.jpg';
import UpcommingImageTwo from '../../img/upcomming-two.jpg';
import UpcommingImageThree from '../../img/upcomming-three.jpg';
import UpcommingImageFour from '../../img/upcomming-four.jpg';

const Nearby = () => {
  const { city } = useParams();

  return (
    <div style={{ marginTop: '112px' }}>
      <div className="container">
        <h2 className="text-center my-4">
          We have found some hosts in your city <br />{' '}
          <span style={{ color: '#ff595e' }}>{city}</span>
        </h2>
        <div className="row">
          <div className="col-lg-6">
            <Upcomming
              joinedPeopleNumber="4 joined"
              joinedPeopleAvatarLink={avatar}
              availableSeats="8 Available"
              cost="AED 100 per person"
              title="Chattaogram Marina - A Walk in chattogram to Remember"
              place={`Muradpur, ${city}`}
              date="22 November 2020"
              image={UpcommingImageOne}
            />
          </div>
          <div className="col-lg-6">
            <Upcomming
              joinedPeopleNumber="4 joined"
              joinedPeopleAvatarLink={avatar}
              availableSeats="8 Available"
              cost="AED 100 per person"
              title="Chattgoram Marina - A Walk in chattogram to Remember"
              place={`Muradpur, ${city}`}
              date="22 November 2020"
              image={UpcommingImageTwo}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Upcomming
              joinedPeopleNumber="4 joined"
              joinedPeopleAvatarLink={avatar}
              availableSeats="8 Available"
              cost="AED 100 per person"
              title="Chattaogram Marina - A Walk in chattogram to Remember"
              place={`Muradpur, ${city}`}
              date="22 November 2020"
              image={UpcommingImageThree}
            />
          </div>
          <div className="col-lg-6">
            <Upcomming
              joinedPeopleNumber="4 joined"
              joinedPeopleAvatarLink={avatar}
              availableSeats="8 Available"
              cost="AED 100 per person"
              title="Chattgoram Marina - A Walk in chattogram to Remember"
              place={`Muradpur, ${city}`}
              date="22 November 2020"
              image={UpcommingImageFour}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nearby;

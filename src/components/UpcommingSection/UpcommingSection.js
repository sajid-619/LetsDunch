import React from 'react';
import Upcomming from '../Upcomming-box/Upcomming';
import UpcommingImageOne from '../../img/1.jpg';
import UpcommingImageTwo from '../../img/2.jpg';
import UpcommingImageThree from '../../img/3.jpg';
import UpcommingImageFour from '../../img/4.jpg';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar.png';

const UpcommingSection = () => {
  return (
    <div id="upcomming" className="landing__upcomming-box">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="landing__upcomming--title my-4">Upcomming Dunch</h2>
        <p className="see-all my-4 text-primary text-decoration-none">
          <Link to="#">
            See all <ChevronRightIcon />
          </Link>
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <Upcomming
            joinedPeopleNumber="4 joined"
            joinedPeopleAvatarLink={avatar}
            availableSeats="8 Available"
            cost="AED 100 per person"
            title="Dubai Marina - A Walk in Dubai to Remember"
            place="Al Garhoud Road, Dubai Creek"
            city="Dubai"
            date="22 November 2020"
            image={UpcommingImageOne}
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <Upcomming
            joinedPeopleNumber="3 joined"
            joinedPeopleAvatarLink={avatar}
            availableSeats="7 Available"
            cost="AED 300 per person"
            title="Madinat Jumeirah - The Souk of the Well-Dressed"
            place="The Palm Jumeirah"
            city="Dubai"
            date="25 November 2020"
            image={UpcommingImageTwo}
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <Upcomming
            joinedPeopleNumber="9 joined"
            joinedPeopleAvatarLink={avatar}
            availableSeats="19 Available"
            cost="AED 150 per person"
            title="Boudoir - The French Connection"
            place="Skydive Dubai Drop Zone"
            city="Chattogram"
            date="28 November 2020"
            image={UpcommingImageThree}
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <Upcomming
            joinedPeopleNumber="7 joined"
            joinedPeopleAvatarLink={avatar}
            availableSeats="19 Available"
            cost="AED 490 per person"
            title="Buhayra Lounge - Where Luxury meets Extravagance"
            place="The Palace Downtown"
            city="Dubai"
            date="1 December 2020"
            image={UpcommingImageFour}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcommingSection;

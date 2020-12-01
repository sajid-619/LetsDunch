import React from 'react';
import avatar from '../../img/avatar.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SuggestedBox from '../SuggestedBox/SuggestedBox';
import SuggestedImageOne from '../../img/suggested-one.jpg';
import SuggestedImageTwo from '../../img/suggested-two.jpg';
import SuggestedImageThree from '../../img/suggested-three.jpg';
import { Link } from 'react-router-dom';

const SuggestedSection = () => {
  return (
    <div className="landing__suggested-box my-5">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="landing__upcomming--title ">Suggested Dunch for you</h2>
        <p className="see-all text-primary">
          <Link to="#">
            {' '}
            See all <ChevronRightIcon />
          </Link>
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <SuggestedBox
            location="Burj Al Arab"
            cost="AED 200 per person"
            title="Al Mahara Intimate fine dining in a unique setting"
            date="23 May, from Saturday 20:00-23:00"
            attendingPeople="2 of your friends attending"
            avatar={avatar}
            image={SuggestedImageOne}
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <SuggestedBox
            location="Burj Al Arab"
            cost="AED 200 per person"
            title="Delicious Japanese, warm service, and Burj Khalifa views"
            date="23 May, from Saturday 20:00-23:00"
            attendingPeople="2 of your friends attending"
            avatar={avatar}
            image={SuggestedImageTwo}
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <SuggestedBox
            location="Burj Al Arab"
            cost="AED 200 per person"
            title="Mythos kouzina & Grill An excellent weeknight date"
            date="23 May, from Saturday 20:00-23:00"
            attendingPeople="2 of your friends attending"
            avatar={avatar}
            image={SuggestedImageThree}
          />
        </div>
      </div>
    </div>
  );
};

export default SuggestedSection;

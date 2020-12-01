import React from 'react';
import Explore from '../Explore-box/Explore';
import RestaurantsImage from '../../img/restaurant.jpg';
import BarImage from '../../img/bars-two.jpg';
import cafe from '../../img/cafe.jpg';
import './ExploreSection.css';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import RestaurantIcon from '@material-ui/icons/Restaurant';

const ExploreSection = () => {
  return (
    <div className="landing__explore-box my-4">
      <h2 className="landing__explore--title my-3">Explore with Lets Dunch</h2>
      <div className="box-container">
        <div className="explore__box__wrapper">
          <div className="explore-box-container">
            <Explore
              Icon={RestaurantIcon}
              title="Restaurants"
              image={RestaurantsImage}
            />
          </div>
        </div>
        <div className="explore__box__wrapper">
          <div className="explore-box-container">
            <Explore Icon={LocalBarIcon} title="Bars" image={BarImage} />
          </div>
        </div>
        <div className="explore__box__wrapper">
          <div className="explore-box-container">
            <Explore Icon={LocalCafeIcon} title="Cafe" image={cafe} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;

import React from 'react';
import PopularBox from '../PopularBox/PopularBox';
import PopularImageSix from '../../img/popular-six.jpg';
import PopularImageOne from '../../img/popular-one.jpg';
import PopularImageTwo from '../../img/popular-two.jpg';
import PopularImageThree from '../../img/popular-three.jpg';
import PopularImageFour from '../../img/popular-four.jpg';
import PopularImageFive from '../../img/popular-five.jpg';
import avatar from '../../img/avatar.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './PopularSection.css';
import { Link } from 'react-router-dom';

const PopularSection = () => {
  return (
    <div className="landing__popular-dunch">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="landing__popular--dunch my-5">
          Popular Dunch Destination
        </h2>
        <p className="see-all my-5">
          <Link to="#">
            {' '}
            See all <ChevronRightIcon />
          </Link>
        </p>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6">
          <div className="box-container">
            <PopularBox
              title="pierchic"
              avatar={avatar}
              friendDunchedNumber="3 friends dunched"
              subTitle="cuisine european"
              image={PopularImageOne}
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="box-container">
            <PopularBox
              title="nathan outlaw at al mahara"
              avatar={avatar}
              friendDunchedNumber="3 friends dunched"
              subTitle="cuisine seafood"
              image={PopularImageTwo}
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="box-container">
            <PopularBox
              title="nathan outlaw at al mahara"
              avatar={avatar}
              friendDunchedNumber="3 friends dunched"
              subTitle="cuisine seafood"
              image={PopularImageThree}
            />
          </div>
        </div>
        {/* </div>
          <div className="row my-4"> */}
        <div className="col-xl-4 col-lg-6">
          <div className="box-container">
            <PopularBox
              title="eauzone"
              avatar={avatar}
              friendDunchedNumber="3 friends dunched"
              subTitle="cuisine modern asian"
              image={PopularImageFour}
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="box-container">
            <PopularBox
              title="la petite maison"
              avatar={avatar}
              friendDunchedNumber="1 friends dunched"
              subTitle="cuisine mediterranean"
              image={PopularImageFive}
            />
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="box-container">
            <PopularBox
              title="la petite maison"
              avatar={avatar}
              friendDunchedNumber="1 friends dunched"
              subTitle="cuisine mediterranean"
              image={PopularImageSix}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;

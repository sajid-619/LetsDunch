import { ChevronRight } from '@material-ui/icons';
import React from 'react';
import './EventLeftSection.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ReadMoreReact from 'read-more-react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import EventMenu from '../EventMenu/EventMenu';
import ExpectBox from '../ExpectBox/ExpectBox';
import ReviewSection from '../ReviewSection/ReviewSection';
import EventJoinedPeople from './EventJoinedPeople/EventJoinedPeople';
import EventCtaSection from './EventCtaSection/EventCtaSection';

const EventLeftSection = () => {
  const experienceDetails =
    "About your host Jean-Yves: “With this menu, I want to take you with me on a culinary journey from France to Asia. I'll share the stories and secrets behind all the dishes. You'll be able to discover how each ingredient has been carefully chosen to create the best harmony of taste, colors, and smells.”";

  return (
    <div className="eventLeftSection">
      <div className="eventSection-container">
        <div className="category">
          <span>
            Dubai <ChevronRight /> Dinner <ChevronRight />{' '}
          </span>
        </div>
        <h2 className="eventLeftSection__title">
          A Gastronomic Dinner with a MasterChef
        </h2>
        <p className="eventLeftSection__hosted">
          Hosted by <span className="hoster__name">Jhon doe</span>
        </p>
        {/* <EventCtaSection /> */}
        <EventJoinedPeople />
        <div className="experience-box my-5">
          <h5>The Experience in a nutshell</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="row-box d-flex align-items-center">
                <div className="icon">
                  <RestaurantIcon />
                </div>
                <div className="row-box-info">
                  <span>Type of the event</span>
                  <p>Diner, French</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row-box d-flex align-items-center">
                <div className="icon">
                  <PeopleAltIcon />
                </div>
                <div className="row-box-info">
                  <span>Number of guests</span>
                  <p>2 to 12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row-box d-flex align-items-center">
                <div className="icon">
                  <AccessTimeIcon />
                </div>
                <div className="row-box-info">
                  <span>Time of the event</span>
                  <p>8:00 PM (2.5 hours)</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row-box d-flex align-items-center">
                <div className="icon">
                  <SpeakerNotesIcon />
                </div>
                <div className="row-box-info">
                  <span>The host speaks</span>
                  <p>English, French</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience-box-close */}

        <div className="experience-details">
          <h5>A word about the experience</h5>
          <span>
            4-course dinner by the winner of the 2012-edition of Masterchef
            France
          </span>

          <ul>
            <li>
              French-Asian fusion menu, a subtle combination of French
              techniques and Asian flavors
            </li>
            <li> 1 communal table of up to 12 guests</li>
            <li> In a former wine cellar near the Marais</li>
            <li>Tripadvisor certificate of excellence</li>
          </ul>
          <p>{<ReadMoreReact text={experienceDetails} />}</p>
          <p className="hoster-name">Christina</p>
        </div>

        <EventMenu />

        <PhotoGallery />

        <ExpectBox />

        <ReviewSection />
      </div>
    </div>
  );
};

export default EventLeftSection;

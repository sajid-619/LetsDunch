import React from 'react';
import './PrivateEvents.css';
import PrivateEventsTop from '../../components/PrivateEventsTop/PrivateEventsTop';
import PrivateEventsSlider from '../../components/PrivateEventsSlider/PrivateEventsSlider';
import PrivateEventsWork from '../../components/PrivateEventsWork/PrivateEventsWork';
import PrivateEventPlanning from '../../components/PrivateEventPlanning/PrivateEventPlanning';
import PrivateEventsReviews from '../../components/PrivateEventsReviews/PrivateEventsReviews';
import PrivateEventsMessage from '../../components/PrivateEventsMessage/PrivateEventsMessage';
import PrivateEventBest from '../../components/PrivateEventBest/PrivateEventBest';
import PrivateEventCelebration from '../../components/PrivateEventCelebration/PrivateEventCelebration';

const PrivateEvents = () => {
  return (
    <div className="private-events">
      <PrivateEventsTop />
      <PrivateEventsSlider />
      <hr className="boundary my-5" />
      <PrivateEventsWork />
      <hr className="boundary my-5" />
      <PrivateEventPlanning />
      <PrivateEventsReviews />
      <PrivateEventsMessage />
      <PrivateEventBest />
      <hr className="boundary" />
      <PrivateEventCelebration />
    </div>
  );
};

export default PrivateEvents;

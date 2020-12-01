import React from 'react';
import video from '../../../img/bg-video-1.mp4';
import './LandingVideo.css';

const LandingVideo = () => {
  return (
    <div className="bg-video">
      <video className="bg-video-content" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser is not support this video
      </video>
    </div>
  );
};

export default LandingVideo;

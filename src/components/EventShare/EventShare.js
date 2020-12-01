import React from 'react';
import { Passers } from 'prop-passer';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

import './EventShare.css';

const EventShare = () => {
  const content = {
    url: String(window.location),
    title: 'Lets Dunch Event',
    shareImage:
      'https://screen-api.eatwith.com/files/1226097/-/scale_crop/690x430/center/-/progressive/yes/',
    size: '2.5rem',
  };

  const { url, title, shareImage, size } = content;

  const ShareList = Passers({
    url,
    className: 'network__share-button',
  })({
    className: 'network cursor-pointer hover transition--default',
    title: `Share ${String(window.location)}`,
  })('li');

  return (
    <div className="eventShare">
      <div>Share on:</div>
      <ShareList>
        <FacebookShareButton quote={title} image={shareImage}>
          <FacebookIcon size={size} />
        </FacebookShareButton>

        <TwitterShareButton title={title} image={shareImage}>
          <TwitterIcon size={size} />
        </TwitterShareButton>

        <WhatsappShareButton title={title} image={shareImage} separator=":: ">
          <WhatsappIcon size={size} />
        </WhatsappShareButton>

        <LinkedinShareButton
          title={title}
          image={shareImage}
          windowWidth={750}
          windowHeight={600}
        >
          <LinkedinIcon size={size} />
        </LinkedinShareButton>
      </ShareList>
    </div>
  );
};

export default EventShare;

import { Avatar, Button } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React from 'react';
import './PopularBox.css';

const PopularBox = ({
  image,
  avatar,
  title,
  subTitle,
  friendDunchedNumber,
}) => {
  return (
    <div className="popular">
      <div className="popular__box d-flex align-items-center justify-content-between">
        <div className="popular__left--section d-flex align-items-center justify-content-between">
          <div className="image--section">
            <img className="popular__image" src={image} alt="PopularImage" />
          </div>
          <div className="text--section">
            <h5 className="popular__title">{title}</h5>
            <p style={{marginBottom: 0}}>{subTitle}</p>
            <div className="d-flex align-items-center">
              <AvatarGroup max={2}>
                <Avatar alt="" src={avatar}></Avatar>
                <Avatar alt="" src={avatar}></Avatar>
                <Avatar alt="" src={avatar}></Avatar>
              </AvatarGroup>
              <span className="popular__dunchedNumber" >{friendDunchedNumber}</span>
            </div>
          </div>
        </div>
        <div className="popular__right--section">
          <Button className="button-white">view</Button>
        </div>
      </div>
    </div>
  );
};

export default PopularBox;

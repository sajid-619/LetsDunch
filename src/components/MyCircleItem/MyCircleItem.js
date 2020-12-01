import { Avatar } from '@material-ui/core';
import React from 'react';
import './MyCircleItem.css';

const MyCircleItem = ({ avatar, name }) => {
  return (
    <div className="myCircleItem my-3">
      <div className="d-flex align-items-center">
        <Avatar alt={name} src={avatar} />
        <span class="name">{name}</span>
      </div>
    </div>
  );
};

export default MyCircleItem;

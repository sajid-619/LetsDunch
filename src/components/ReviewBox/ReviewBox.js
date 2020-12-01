import { Avatar } from '@material-ui/core';
import React from 'react';
import './ReviewBox.css';
import StarIcon from '@material-ui/icons/Star';

const ReviewBox = ({avatar, name, date, review, description}) => {
    return (
        <div className="reviewBox my-5">
            <div className="reviewBox__top d-flex">
                <div>
                    <Avatar src={avatar} />
                </div>
                <div className="mx-3">
                    <p className="reviewerName">{name}</p>
                    <span className="review">{review} <StarIcon /></span>
                </div>
                <div>
                    <span className="reviewDate">{date}</span>
                </div>
            </div>
            <p className="reviewDescription">
                {description}
            </p>
        </div>
    );
};

export default ReviewBox;
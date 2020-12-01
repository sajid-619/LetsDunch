import React, { Fragment, useState } from 'react';
import ReviewBox from '../ReviewBox/ReviewBox';
import avatar from '../../img/avatar.png';

const ReviewSection = () => {
  const [showReview, setShowReview] = useState(false);
  return (
    <div>
      <ReviewBox
        avatar={avatar}
        name="Erica"
        date="December 2019"
        description="Chef Christina made a really yummy meal, and served up sweet, sincere stories to go along with each course. She and her husband were warm and entertaining hosts who even surprised us with a little live opera performance by a friend. You could feel her genuine joy in cooking and entertaining."
        review="5.0/5"
      />
      <hr />
      <ReviewBox
        avatar={avatar}
        name="Erica"
        date="December 2019"
        description="Chef Christina made a really yummy meal, and served up sweet, sincere stories to go along with each course."
        review="5.0/5"
      />

      <hr />

      {showReview && (
        <Fragment>
          <ReviewBox
            avatar={avatar}
            name="Erica"
            date="December 2019"
            description="Chef Christina made a really yummy meal, and served up sweet, sincere stories to go along with each course."
            review="5.0/5"
          />
          <hr />
          <ReviewBox
            avatar={avatar}
            name="Erica"
            date="December 2019"
            description="Chef Christina made a really yummy meal, and served up sweet, sincere stories to go along with each course."
            review="5.0/5"
          />
          <hr />
          <ReviewBox
            avatar={avatar}
            name="Erica"
            date="December 2019"
            description="Chef Christina made a really yummy meal, and served up sweet, sincere stories to go along with each course. You could feel her genuine joy in cooking and entertaining."
            review="5.0/5"
          />
          <hr />
          <ReviewBox
            avatar={avatar}
            name="Erica"
            date="December 2019"
            description="Chef Christina made a really yummy meal, and served up sweet, sincere stories to go along with each course. "
            review="5.0/5"
          />
          <hr />
          <ReviewBox
            avatar={avatar}
            name="Erica"
            date="December 2019"
            description="Chef Christina made a really yummy meal, and served up sweet, sincere stories to go along with each course. You could feel her genuine joy in cooking and entertaining."
            review="5.0/5"
          />
        </Fragment>
      )}
      <p onClick={() => setShowReview(!showReview)} id="readMore">
        {showReview ? 'See less review' : 'See more review'}
      </p>
    </div>
  );
};

export default ReviewSection;

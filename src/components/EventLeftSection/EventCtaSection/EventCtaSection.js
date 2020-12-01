import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';

const EventCtaSection = () => {
  const [interested, setInterested] = useState(false);
  const [going, setGoing] = useState(false);
  const [like, setLike] = useState(false);
  const [share, setShare] = useState(false);

  const auth = useSelector((state) => state.auth);

  const { isAuthenticated } = auth;

  const ActiveNotify = () =>
    toast.success('Your response visible to the friends and network !');
  const DeactiveNotify = () =>
    toast.dark('Your response is not visible to the friends and network !');

  const handleInterested = () => {
    setInterested(!interested);
    if (interested) {
      DeactiveNotify();
    } else {
      ActiveNotify();
    }
  };
  const handleGoing = () => {
    setGoing(!going);
    if (going) {
      DeactiveNotify();
    } else {
      ActiveNotify();
    }
  };
  const handleLike = () => {
    setLike(!like);
    if (like) {
      DeactiveNotify();
    } else {
      ActiveNotify();
    }
  };
  const handleShare = () => {
    setShare(!share);
  };
  return (
    <div>
      <ToastContainer />
      <div className="cta-section">
        <div className="row">
          <div className="col-md-3">
            {isAuthenticated ? (
              <div onClick={handleInterested} className="wrapper">
                <div
                  className={`cta-container interested ${
                    interested && 'action-selected'
                  }`}
                >
                  <StarIcon />
                </div>
                <p>Interested</p>
              </div>
            ) : (
              <Link to="/login">
                <div onClick={handleInterested} className="wrapper">
                  <div
                    className={`cta-container interested ${
                      interested && 'action-selected'
                    }`}
                  >
                    <Tooltip
                      style={{ fontSize: '18px !important' }}
                      title="You are not authenticated user. Please Login !!"
                    >
                      <StarIcon />
                    </Tooltip>
                  </div>
                  <p>Interested</p>
                </div>
              </Link>
            )}
          </div>
          <div className="col-md-3">
            {isAuthenticated ? (
              <div onClick={handleGoing} className="wrapper">
                <div
                  className={`cta-container going ${
                    going && 'action-selected'
                  }`}
                >
                  <CheckCircleIcon />
                </div>
                <p>Going</p>
              </div>
            ) : (
              <Link to="/login">
                <div onClick={handleGoing} className="wrapper">
                  <div
                    className={`cta-container going ${
                      going && 'action-selected'
                    }`}
                  >
                    <Tooltip title="You are not authenticated user. Please Login !!">
                      <CheckCircleIcon />
                    </Tooltip>
                  </div>
                  <p>Going</p>
                </div>
              </Link>
            )}
          </div>
          <div className="col-md-3">
            {isAuthenticated ? (
              <div onClick={handleLike} className="wrapper">
                <div
                  className={`cta-container like ${like && 'action-selected'}`}
                >
                  <ThumbUpAltIcon />
                </div>
                <p>Like</p>
              </div>
            ) : (
              <Link to="/login">
                <div onClick={handleLike} className="wrapper">
                  <div
                    className={`cta-container like ${
                      like && 'action-selected'
                    }`}
                  >
                    <Tooltip title="You are not authenticated user. Please Login !!">
                      <ThumbUpAltIcon />
                    </Tooltip>
                  </div>
                  <p>Like</p>
                </div>
              </Link>
            )}
          </div>
          <div className="col-md-3">
            <div onClick={handleShare} className="wrapper">
              <div
                className={`cta-container event-share ${
                  share && 'action-selected'
                }`}
              >
                <ShareIcon />
              </div>
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCtaSection;

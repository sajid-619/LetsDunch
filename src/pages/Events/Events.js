import React from 'react';
import './Events.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import Sticky from 'react-sticky-el';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import EventShare from '../../components/EventShare/EventShare';
import EventLeftSection from '../../components/EventLeftSection/EventLeftSection';
import EventRightSection from '../../components/EventRightSection/EventRightSection';
import ResponsiveRightSection from '../../components/EventRightSection/ResponsiveRightSection/ResponsiveRightSection';
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '80vw',
    height: '40vh',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Events = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [copyText, setCopyText] = React.useState(String(window.location));
  const [copied, setCopied] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="d-flex align-items-center justify-content-between">
        <h2>Share Experience</h2>
        <span
          onClick={handleClose}
          style={{
            fontSize: '30px',
            cursor: 'pointer',
          }}
        >
          &times;
        </span>
      </div>
      <div className="input-button d-flex align-items-center justify-content-center my-4">
        <input
          readOnly
          style={{ width: '64%' }}
          className="form-control"
          type="text"
          value={copyText}
        />
        <CopyToClipboard text={copyText} onCopy={() => setCopied(true)}>
          <button className="btn btn-outline-success">Copy to clipboard</button>
        </CopyToClipboard>
      </div>
      {copied ? <span className="copy">Copied.</span> : null}

      <EventShare />
    </div>
  );

  const auth = useSelector((state) => state.auth);

  const { isAuthenticated } = auth;

  return (
    <div className="events">
      <div className="events__slider-section">
        <Carousel autoPlay infiniteLoop swipeable>
          <div className="events-slider-box">
            <img className="events-image" src={img1} alt="slider" />
          </div>
          <div className="events-slider-box">
            <img className="events-image" src={img2} alt="slider" />
          </div>
          <div className="events-slider-box">
            <img className="events-image" src={img3} alt="slider" />
          </div>
          <div className="events-slider-box">
            <img className="events-image" src={img4} alt="slider" />
          </div>
        </Carousel>
        <p className="heart-share-icon">
          {isAuthenticated ? (
            <span>
              <FavoriteBorderIcon />
            </span>
          ) : (
            <Link to="/login">
              <span>
                <FavoriteBorderIcon />
              </span>
            </Link>
          )}
          <span onClick={handleOpen}>
            <ShareIcon />
          </span>
        </p>
      </div>
      <div style={{ marginBottom: '94px' }} className="container">
        <div className="row">
          <div className="col-xl-8">
            <EventLeftSection />
          </div>
          <div className="col-xl-4 rightSection">
            <Sticky>
              <EventRightSection />
            </Sticky>
          </div>
        </div>
      </div>
      <div className="responsive__book__part">
        <ResponsiveRightSection />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Events;

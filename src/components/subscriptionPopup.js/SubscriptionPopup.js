import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Cookies from 'js-cookie';
import logo from '../../img/ColorWebLogo.png';

function getModalStyle() {
  const top = 40;
  const left = 42;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SubscriptionPopup = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const getCookies = Cookies.get('subscriptionPopup');
    if (getCookies === undefined) {
      setOpen(true);
    }
  }, []);
  const handleClose = () => {
    setOpen(false);
    Cookies.set('subscriptionPopup', 'false', { expires: 2 });
  };

  const handleSubmit = (e) => {
    setOpen(false);
    
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="text-center">
        <img style={{ width: '220px', height: 'auto' }} src={logo} alt="" />
        <h3>
          Before you go,{' '}
          <span style={{ color: '#ff595e' }}>stay in the know</span>
        </h3>
        <p>
          We will share offers, unforgettable culinary <br /> experiences &
          exciting updates you won't want to miss!
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            required
            type="email"
            placeholder="Your email address"
            className="form-control"
          />
          <input
            type="submit"
            style={{ background: '#ff595e', color: 'white' }}
            className="btn my-2"
            value="Sign up me!"
          />
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default SubscriptionPopup;

import React from 'react';
import './PrivateEventBest.css';
import best from '../../img/private-events-best.jpg';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
const PrivateEventBest = () => {
  return (
    <div className="privateEventBest my-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="image">
              <img className="img-responsive" src={best} alt="" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="text">
              <h5>Only the best</h5>
              <h4>Only 5% of hosts accepted!</h4>
              <p>
                <DoneOutlineIcon className="check" /> We look for the most
                talented hosts in your city{' '}
              </p>
              <p>
                <DoneOutlineIcon className="check" /> We review and create the
                best events for you{' '}
              </p>
              <p>
                <DoneOutlineIcon className="check" /> We review all guest
                feedback{' '}
              </p>
              <p>
                <DoneOutlineIcon className="check" /> Only the best hosts are
                allowed on the platform{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventBest;

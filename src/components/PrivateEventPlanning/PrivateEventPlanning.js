import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './PrivateEventPlanning.css';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
const PrivateEventPlanning = () => {
  return (
    <div
      style={{ marginBottom: '25px' }}
      className="container privateEventPlaning"
    >
      <div className="row">
        <div className="col-xl-6">
          <div className="planingText">
            <h4>EVENT PLANNING</h4>
            <h3>We take the stress out of your event planning</h3>

            <a style={{ color: '#ff595e' }} href="#message">
              <h4>
                Contact our team <ArrowDownwardIcon />
              </h4>
            </a>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <div className="col-md-6">
              <div className="planningCard">
                <ExploreIcon />
                <p>Our Private Event Consultants are here to guide you</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="planningCard">
                <ExploreIcon />
                <p>Top rated hosts ready to take care of every detail.</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">
              <div className="planningCard">
                <ExploreIcon />
                <p>
                  Our payment sharing tool helps you split the cost of the event
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="planningCard">
                <ExploreIcon />
                <p>All dietary requirements are taken care off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventPlanning;

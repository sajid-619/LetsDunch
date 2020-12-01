import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './PaymentStatus.css';

const PaymentStatus = () => {
  return (
    <div className="paymentStatus">
      <div className="top__section">
        <h3 className="paymentStatus__title">Payment Status</h3>
        <h2 className="message-text">
          <CheckCircleIcon className="check-mark" /> Thank you for your payment!
        </h2>
        <p className="review text-secondary">
          Please review your confirmation receipt
        </p>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="paymentInfo-container">
            <p>
              <span className="text-secondary">Name</span>
              <span>Ganesh Hulle</span>
            </p>
            <p>
              <span className="text-secondary">Remmitance id</span>
              <span>12345678956852</span>
            </p>
            <p>
              <span className="text-secondary">Payment Type</span>
              <span>Card</span>
            </p>
            <p>
              <span className="text-secondary">Payment Method</span>
              <span>Dicovery Card</span>
            </p>
            <p>
              <span className="text-secondary">Total Payment</span>
              <span>AED 200.00</span>
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <button className="button submit--button">Print Receipt</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;

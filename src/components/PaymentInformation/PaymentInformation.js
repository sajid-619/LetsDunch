import React from 'react';
import './PaymentInformation.css';
import image from '../../img/thali.jpg';

const PaymentInformation = () => {
  return (
    <div className="paymentInformation">
      <h3 className="paymentInformation__title">Payment Information</h3>
      <div className="items-box d-flex align-items-center">
        <div className="items-img-box">
          <img src={image} alt="" className="items-img" />
        </div>
        <div className="item-info">
          <p className="item-name">Kannadiga Oota (Karnataka Thali)</p>
          <p className="item-price">AED 200 per person</p>
        </div>
      </div>
      <div className="price-section">
        <div className="quantity-section d-flex align-items-center justify-content-between">
          <p className="quantity">I want to pay for</p>
          <input defaultValue="1" type="number" />
        </div>
        <p className="text-secondary my-4 subtotal d-flex align-items-center justify-content-between">
          <span>Subtotal</span>
          <span>200.00</span>
        </p>
        <p className="text-secondary my-4  d-flex align-items-center justify-content-between">
          <span>Order Charges</span>
          <span>0.00</span>
        </p>
        <p className="total d-flex align-items-center justify-content-between">
          <span>Total</span>
          <span>200 AED</span>
        </p>
      </div>
    </div>
  );
};

export default PaymentInformation;

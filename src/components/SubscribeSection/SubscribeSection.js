import React, { useState } from 'react';
import './SubscribeSection.css';

const SubscribeSection = () => {
  const [email, setEmail] = useState(' ');
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(' ');
  };
  return (
    <div id="subscription" className="subscribeSection">
      <h4>Join our table</h4>
      <p>
        Sign up to receive the latest on culinary experiences near you,
        exclusive offers and more <br /> mouthwatering goodness right to your
        inbox.
      </p>
      <div className="subscribe-box">
        <form onSubmit={handleSubmit}>
          <input
            id="subscribe"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email address"
          />
          <input type="submit" value="Sign me up!" />
        </form>
      </div>
      <span>
        By signing up, I agree to Eatwith's Terms & Conditions, Trust and
        Privacy Policy
      </span>
    </div>
  );
};

export default SubscribeSection;

import React from 'react';
import './Landing.css';
import LandingTopSection from '../../components/LandingTopSection/LandingTopSection';
import UpcommingSection from '../../components/UpcommingSection/UpcommingSection';
import SubscribeSection from '../../components/SubscribeSection/SubscribeSection';
import Footer from '../../components/Footer/Footer';
import SubscriptionPopup from '../../components/subscriptionPopup.js/SubscriptionPopup';

const Landing = () => {
  return (
    <div className="landing">
      <SubscriptionPopup />
      <LandingTopSection />
      <div className="container py-5">
        <UpcommingSection />

        {/* <SuggestedSection /> */}
        {/* <hr /> */}
        {/* <PopularSection /> */}
      </div>
      <SubscribeSection />
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;

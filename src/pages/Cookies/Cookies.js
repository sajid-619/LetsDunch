import React from 'react';
import '../Privacy/Privacy.css';
import Pressum from '../../img/pressumBackground.svg';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <div className="privacy">
      <div className="row d-flex">
        <div className="col-md-4">
          <div className="text-center">
            <Link className="back" to="/">
              Back
            </Link>
            <h3 className="my-4">Cookies</h3>
            <p className="company-details-text">
              Lets Dunch is committed to protecting and respecting your privacy.
            </p>
            <div>
              <img src={Pressum} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="important-details">
            For the same reason, we may obtain information about your general
            internet usage by using a cookie file which is stored on your
            browser or the hard drive of your computer. Cookies contain
            information that is transferred to your computer’s hard drive. They
            help us to improve our site and to deliver a better and more
            personalised service. Some of the cookies we use are essential for
            the site to operate. Different types of cookies. Strictly necessary
            cookies: These are cookies that are required for the operation of
            our site. They include, for example, cookies that enable you to log
            into secure areas of our site or make use of e-billing services.
            Analytical/performance cookies. They allow us to recognise and count
            the number of visitors and to see how users move around our site
            when they are using it. This helps us to improve the way our site
            works, for example, by ensuring that users are finding what they are
            looking for easily. Functionality cookies. These are used to
            recognise you when you return to our site. This enables us to
            personalise our content for you, greet you by name and remember your
            preference (for example, your choice of language or region).
            Targeting cookies. These cookies record your visit to our website,
            the pages you have visited and the links you have followed. Third
            parties use this information to make our site and the advertising
            displayed by advertising networks more relevant to your interests.
            We share this information with third parties for this purpose.
            Cookies are widely used in order to make websites work, or work more
            efficiently, as well as to provide information to the owners of the
            site. You can find more information about the individual cookies we
            use and the purposes for which we use them in them table below. If
            you register with us or if you continue to use our site, you agree
            to our use of cookies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-4 text-center">
          <h4>About</h4>
          <ul>
            <li>
              <Link to="/">Imprint/ Impressum</Link>
            </li>
            <li>
              <Link to="/">Work with Us</Link>
            </li>
            {/* <li>
              <Link to="#subscribe">Subscribe</Link>
            </li> */}
            {/* <li>
              <Link to="/">Sitemap</Link>
            </li> */}
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/cookies">Cookies & Consent</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            {/* <li>
              <Link to="/">Disclaimer</Link>
            </li> */}
          </ul>
        </div>
        {/* <div className="col-md-3">
          <h4>Partnerships</h4>
          <ul>
            <li>
              <Link to="/">Travel Guides</Link>
            </li>
            <li>
              <Link to="/">Inspiring Stories</Link>
            </li>
            <li>
              <Link to="/">Virtual Guides</Link>
            </li>
            <li>
              <Link to="/">Experiences</Link>
            </li>
          </ul>
        </div> */}
        <div className="col-md-4 text-center">
          <h4>Support</h4>
          <ul>
            <li>
              <Link to="/">Chat with us</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
          <div className="social-icons">
            <Link className="icon fb" target="_blank" to="https://facebook.com">
              <img
                src="https://trift.io/wp-content/themes/trift/assets/css/dist/3742aeff1224029d8b551609b1a41301.svg"
                alt=""
              />
            </Link>
            <Link
              className="icon instagram"
              target="_blank"
              to="https://instagram.com"
            >
              <img
                src="https://trift.io/wp-content/themes/trift/assets/css/dist/9a79105c9c72ebe1d112feac6d02e808.svg"
                alt=""
              />
            </Link>
            {/* <a className="icon linkedin" to="/">
              <img
                src="https://trift.io/wp-content/themes/trift/assets/css/dist/23f082b1e4ad45b74119666b7ec78570.svg"
                alt=""
              />
            </a> */}
            {/* <a className="icon youtube" to="/">
              <img
                src="https://trift.io/wp-content/themes/trift/assets/css/dist/587f336e06ba728ebea8aee45651279f.svg"
                alt=""
              />
            </a> */}
            {/* <a className="icon twitter" to="/">
              <img
                src="https://trift.io/wp-content/themes/trift/assets/css/dist/a38813d6e8f40a3e0580b5a1caa670f3.svg"
                alt=""
              />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

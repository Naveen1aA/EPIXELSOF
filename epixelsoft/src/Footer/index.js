import React from 'react';
import './index.css'; // Ensure you create a CSS file for the styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Logo</h2>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Mobile app</h3>
            <ul>
              <li>Features</li>
              <li> share</li>
              <li>Video record</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li>Featured artists</li>
              <li>The Portal</li>
              <li>Live events</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>History</li>
            </ul>
          </div>
        </div>
        <div className="footer-actions">
          <button className="btn register">Register</button>
          <button className="btn login">Log in</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Photo, Inc. 2019. We love our users!</p>
        <div className="social-icons">
          <h2>Follow Us on</h2>
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <FontAwesomeIcon icon={faTwitter} className="icon" />
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

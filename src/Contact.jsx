import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Envelope icon from solid icons
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Social media icons from brands icons
import CustomNavbar from './toggleBar';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <CustomNavbar/>
      <h2>Contact Information</h2>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> Email:  <a href="">abdulwasiueunk@gmail.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/Wasiue03" target="_blank" rel="noopener noreferrer">github.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/abdul-wasiue/" target="_blank" rel="noopener noreferrer">linkedin.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faFacebook} /> Facebook: <a href="https://www.facebook.com/robert.channar" target="_blank" rel="noopener noreferrer">facebook.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/wasiue_/" target="_blank" rel="noopener noreferrer">instagram.com</a>
      </p>
    </div>
  );
};

export default ContactInfo;

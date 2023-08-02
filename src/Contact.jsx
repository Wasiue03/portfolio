import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Envelope icon from solid icons
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Social media icons from brands icons

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> Email: your-email@example.com
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/Wasiue03" target="_blank" rel="noopener noreferrer">github.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-linkedin-username</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faFacebook} /> Facebook: <a href="https://www.facebook.com/your-facebook-username" target="_blank" rel="noopener noreferrer">facebook.com/your-facebook-username</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faInstagram} /> Instagram: <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">instagram.com/your-instagram-username</a>
      </p>
    </div>
  );
};

export default ContactInfo;

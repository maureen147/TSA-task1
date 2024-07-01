// import React from 'react'
// import image1 from '../assets/images/nav1.png'
// import image2 from '../assets/images/Facebook-1.png'
// import image3 from '../assets/images/Instagram.png'
// import image4 from '../assets/images/LinkedIn.png'
// import image5 from '../assets/images/Twitter.png'

// const Footer = () => {
//   return (
//     <div id='footer'>
//       <div className="first-footer">
//      <img src={image1} alt="" />
//      <h3>JohnDev,</h3>
//      </div>
//      <div className="second-footer">
//      <ul>
//       <li>Home</li>
//       <li>Portfolio</li>
//       <li>About Me</li>
//       <li>Contact</li>
//       <li>Testimonial</li>
//       <li>Portfolio</li>
//       </ul>
//      </div>
//      <div className="last">
//      <img src={image2} alt="" />
//      <img src={image3} alt="" />
//      <img src={image4} alt="" />
//      <img src={image5} alt="" />
//      </div>
     
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { FacebookF, Instagram, Twitter, LinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="background-image-container"></div>
          <span className="text">JohnDev,</span>
        </div>
        <nav className="footer-nav">
          <a href="#home" className="footer-link">Home</a>
          <a href="#portfolio" className="footer-link">Portfolio</a>
          <a href="#about" className="footer-link">About me</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="#testimonials" className="footer-link">Testimonials</a>
        </nav>
        <div className="footer-social-icons">
          <a href="#" className="footer-link">
            <FacebookF />
          </a>
          <a href="#"  className="footer-link">
            <Instagram />
          </a>
          <a href="#" className="footer-link">
            <Twitter />
          </a>
          <a href="#" className="footer-link">
            <LinkedinIn />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          Code with <span className="heart">❤</span> by Momo
        </p>
        <div className="footer-policy">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

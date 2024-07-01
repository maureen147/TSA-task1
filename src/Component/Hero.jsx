import React from 'react'
import image2 from '../assets/images/Group 11 1.png'


const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <h3 className="title">Hey, I am John</h3>
        <h1 className="heading">I develop dynamic and User-Centered Web Applications</h1>
        <h2 className="description">My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</h2>
        <button className="button"><a href="#contact">Get In Touch</a></button>
      </div>
      <div className="hero-image">
        <img src={image2} alt="her-image" />
      </div>
    </div>
  );
}

export default Hero;

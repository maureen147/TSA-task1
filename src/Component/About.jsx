import React from "react";
import image1 from "../assets/images/second img.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-image-container">
        <img src={image1} alt="about-image" className="about-image" />
      </div>
      <div className="about-content">
      <div className="about-inner">
        <h2 className="about-title">About</h2>
        <div className="">
          <h4 className="about-heading">About me</h4>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.
          </p>
          <p className="">
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default About;

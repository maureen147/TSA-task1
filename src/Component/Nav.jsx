import React, { useState } from "react";
import image1 from "../assets/images/nav1.png";
import image2 from "../assets/images/JohnDev,.png";

const Nav = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActive = (item) => {
    setActive(item);
    setMenuOpen(false);
  };

  const handleLinkClick = (item) => {
    handleSetActive(item);
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav-container">
      <div className="nav-inner">
        <div className="logo" onClick={() => handleLinkClick("Home")}>
          <div className="background-image-container">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
          </div>
        </div>
        <div className="nav-links">
          <ul className="nav-list lg">
            <li
              className={`nav-item ${active === "Home" ? "active" : ""}`}
              onClick={() => handleLinkClick("Home")}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`nav-item ${active === "Portfolio" ? "active" : ""}`}
              onClick={() => handleLinkClick("Portfolio")}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className={`nav-item ${active === "About" ? "active" : ""}`}
              onClick={() => handleLinkClick("About")}
            >
              <a href="#about">About me</a>
            </li>
            <li
              className={`nav-item ${
                active === "Testimonials" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Testimonials")}
            >
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="contact-button">
          <button className="contact-btn">
            <a href="#contact">Contact me</a>
          </button>
        </div>
        <div className="menu-button">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <ul className="nav-list">
            <li
              className={`mobile-menu-item ${
                active === "Home" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`mobile-menu-item ${
                active === "Portfolio" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Portfolio")}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className={`mobile-menu-item ${
                active === "About" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("About")}
            >
              <a href="#about">About me</a>
            </li>
            <li
              className={`mobile-menu-item ${
                active === "Testimonials" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Testimonials")}
            >
              <a href="#testimonials">Testimonials</a>
            </li>
            <a href="#contact">
              <button className="mobile-contact-btn">Contact me</button>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;

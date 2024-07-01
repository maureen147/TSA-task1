import React from 'react'
import project1 from '../assets/images/prj1.png'
import project2 from '../assets/images/prj2.png'
import project3 from '../assets/images/prj3.png'
// import img4 from '../assets/images/Vector (2).png'
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";




const projects = [
  {
    title: "Ahuse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://google.com",
    image: project1,
  },
  {
    title: "App Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://google.com",
    image: project2,
  },
  {
    title: "Easy Rent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://google.com",
    image: project3,
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-header">
        <div className="left">
          <h3 className="portfolio-title">Recent Projects</h3>
          <h2 className="portfolio-heading">My Portfolio</h2>
        </div>
        <button className="portfolio-github-button">
          <a
            href="https://github.com/Maticmania"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-github-link"
          >
            <FaGithub className="icon" /> Visit My GitHub
          </a>
        </button>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-project-card">
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-project-image"
            />
            <h4 className="portfolio-project-title">{project.title}</h4>
            <p className="portfolio-project-description">{project.description}</p>
            <div>
              <a
                href={project.link}
                className="portfolio-project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View website{" "}
                <span className="icon">
                  <BsArrowUpRight />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

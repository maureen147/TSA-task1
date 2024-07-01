import React from 'react';
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdPricetags } from "react-icons/io";
import { SiRotaryinternational } from "react-icons/si";
import { HiCode } from "react-icons/hi";

const skills = [
  {
    title: 'Responsive Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    icon: <IoIosPhonePortrait /> , 
  },
  {
    title: 'Front-End Frameworks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    icon: <IoMdPricetags/>,
  },
  {
    title: 'Testing and Debugging',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    icon: <SiRotaryinternational/>,
  },
  {
    title: 'Cloud Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    icon: <HiCode/>, 
  },
];

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='skills-header'>
        <h2 className='skills-title'>My Skills</h2>
        <h1 className='skills-heading'>My Expertise</h1>
      </div>
      <div className='skills-grid'>
        {skills.map((skill, index) => (
          <div key={index} className='skill-card'>
            <div className='skill-icon'>{skill.icon}</div>
            <h3 className='skill-title'>{skill.title}</h3>
            <p className='skill-description'>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

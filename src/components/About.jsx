import React from 'react'
import "./About.css";

const About = ({ hero }) => {
  return (
    <div className="about-container">
      <h2>About me./></h2>
          {hero.aboutMe.map((item) =>{
            return(
              <h3 className='info'>{item.info}</h3>
            );
          })}
            {hero.aboutMe.map((item) =>{
            return(
              <p className='text'>{item.text}</p>
            );
          })}
    </div>
  )
};

export default About
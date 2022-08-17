import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
        <div className="profile-container">
          <img src={hero.image} alt="image" />
        </div>
        <div className="card">
        <h2>
          Cristina López
        </h2>
        <div className="text-content">
                    <p>📍{hero.city} </p>
          <p>{hero.birthDate}</p>
          <p>
            <a className="mail" href={"mailto:" + hero.email}>
            mistydeveloping@gmail.com
            </a>
          </p>
        </div>
          <div className="image-container">
            <a href={hero.gitHub}><img src={hero.gitHubLogo} alt="github/misty" /></a>
            <a href={hero.linkedin}><img src={hero.linkedinLogo} alt="linkedin/misty" /></a>
          </div>
        </div>
    </div>
  );
};

export default Hero;
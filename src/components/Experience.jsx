import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <div className="experience card">
      <h2>Experience./&gt;</h2>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">{item.name}</p>
              <p className="inner-text">{item.where}</p>
              <p className="inner-text">{item.date}</p>
              <p className="inner-text-description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
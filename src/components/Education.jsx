import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div className="education">
      <div className="education card">
      <h2>Education./&gt;</h2>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">{item.name}</p>
              <p className="inner-text">{item.where}</p>
              <p className="inner-text">{item.date}</p>
              <p className="inner-text">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
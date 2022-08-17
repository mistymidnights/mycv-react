import React from "react";
import "./More.css";

const More = ({ languages, habilities }) => {
  return (
    <div className="more">
      <div className="languages-card">
        <div>
          <h3>Languages./&gt;</h3>
        </div>
        <div className="languages-cont">
          {languages.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p className="name">{item.language}</p>
                <p className="inner-text">{item.level}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="divider-skill"></div>
      <div className="skillcard">
        {habilities.map((txt) => (
          <p>{txt}</p>
        ))}
      </div>
    </div>
  );
};

export default More;

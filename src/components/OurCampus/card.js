import React from "react";
import "./ourCampus.css";

const Card = ({ title }) => {
  return (
    <div className="card-style-ourcompus">
      <div className="textContainer">
        <span className="card-title-ourcompus">{title}</span>
      </div>
    </div>
  );
};

export default Card;

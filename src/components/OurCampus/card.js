import React from "react";
import "./ourCampus.css";

const Card = ({ title }) => {
  return (
    <div className="card-style">
      <div className="textContainer">
        <span className="card-title">{title}</span>
      </div>
    </div>
  );
};

export default Card;

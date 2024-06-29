import React from "react";
import "./CoursesCart.css";

const CourseCard = ({ title, styleline, description }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F9FCFF",
          borderRadius: 15,
          padding: 22,
          paddingLeft: 24,
          paddingRight: 24,
          display: "flex",
          textAlign: "left",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "600" }}>{title}</span>
        <img src={styleline} alt={styleline}></img>
      </div>
    </>
  );
};

export default CourseCard;

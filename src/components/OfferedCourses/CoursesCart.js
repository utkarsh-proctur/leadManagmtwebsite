import React from "react";
import "./CoursesCart.css";

const CourseCard = ({ title, styleline, description }) => {
  return (
    <>
      <div
        style={{
          backgroundColor:"white",
          borderRadius: 15,
          padding: 22,
          paddingLeft: 24,
          paddingRight: 24,
          display: "flex",
          textAlign: "left",
          flexDirection: "column",
          boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          border:"1px solid #D9D9D9"
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "600" }}>{title}</span>
        <img src={styleline} alt={styleline}></img>
      </div>
    </>
  );
};

export default CourseCard;

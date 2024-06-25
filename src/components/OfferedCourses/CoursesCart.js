import React from 'react';
import './CoursesCart.css';

const CourseCard = ({ title,styleline, description, image }) => {
  return (
    <>
     <div className="course-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <h1 className="card-title">{title}</h1>
        <img src={styleline} alt={styleline} className='style-line'></img>
        <p className="card-description">{description}</p>
      </div>
     </div>
    </>
  );
};

export default CourseCard;
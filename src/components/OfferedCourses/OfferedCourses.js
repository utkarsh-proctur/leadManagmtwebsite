import React from "react";
import CourseCard from "./CoursesCart";
import vectorimg from "../images/coursescartlineimg.png";
import coursescartline from "../images/coursescartlineimg.png";
import "./OfferedCourses.css";

const coursesData = [
  {
    title: "B.Tech (4 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "B.Tech Lateral (3 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "B.Tech (4 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "B.Tech (4 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
];

const Courses = () => {
  return (
    <div className="containoffercourses">
      <h2 className="titleoffercourses"></h2>
      <div className="course-grid-offercourses">
        {coursesData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            styleline={coursescartline}
            description={course.description}
            image={vectorimg}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;

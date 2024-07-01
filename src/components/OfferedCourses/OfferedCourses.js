import React from "react";
import CourseCard from "./CoursesCart";
import vectorimg from "../images/coursescartlineimg.png";
import coursescartline from "../images/coursescartlineimg.png";
import "./OfferedCourses.css";

const coursesDataUndergraduate = [
  {
    title: "B.Tech (4 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "B. Pharma (4 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "BHMCT (4 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "BBA (3 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "BCA (3 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "B.Com (3 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "LLB (3 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "Diploma Engg (3 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "D. Pharma (2 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
];
const coursesDataPostgraduate = [
  {
    title: "M.Tech (2 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "MCA (2 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "MBA (2 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
  {
    title: "M. Pharma (2 Years)",
    description:
      "To be eligible for our B.Tech programs, Candidate must have completed Class 12th in Science with PCM, with a minimum of 50% for General and OBC categories, and 45% for SC/ST. Explore courses in CS, ME, EC&C, EE, and CE.",
  },
];

const Courses = () => {
  return (
    <div className="containoffercourses">
      <h2 className="titleoffercourses">Available Courses </h2>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            font: "Roboto",
            fontSize: "24px",
            color: "#242A59",
            fontWeight: "bold",
          }}
        >
          <span> Undergraduate Courses</span>
        </div>
        <div
          style={{
            borderBottom: "2px solid #CEE4FA",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>

        <div className="course-grid-offercourses">
          {coursesDataUndergraduate.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              styleline={coursescartline}
              description={course.description}
              image={vectorimg}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            font: "Roboto",
            fontSize: "24px",
            color: "#242A59",
            fontWeight: "bold",
            marginTop: "22px",
          }}
        >
          <span> Postgraduate Courses</span>
        </div>
        <div
          style={{
            borderBottom: "2px solid #CEE4FA",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>

        <div className="course-grid-offercourses">
          {coursesDataPostgraduate.map((course, index) => (
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
    </div>
  );
};

export default Courses;

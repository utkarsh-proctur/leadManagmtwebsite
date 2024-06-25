import React from "react";
import "./Admissionprocess.css";
import arrowup from "../images/Group 5880 (1).png";
import arrowdown from "../images/Group 5880.png";

const Question = ({ overviewheading, overviewpara }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="containoverview">
      <div className="headeroverview" onClick={() => setIsOpen(!isOpen)}>
        <p className="question">{overviewheading}</p>
        {isOpen ? (
          <img src={arrowdown} alt="arrowdown" className="arrow-down" />
        ) : (
          <img src={arrowup} alt="arrowup" className="arrow-down" />
        )}
      </div>
      {isOpen && <div className="answer">{overviewpara }</div>}
    </div>
  );
};

const Questions = () => {
  const questions = [
    {
      overviewheading: "User Instructions",
      overviewpara :
        "Candidates seeking admission for the 2024-25 academic year must follow the guidelines below and ensure all required documents are in order. The admission process involves filling out the admission form at the institute and presenting the necessary documents for verification.",

    },
    {
      overviewheading: "Documents Required?",
      overviewpara : "Candidates must bring the following documents in original for verification along with three sets of self-attested copies in the order listed.",
    },
    {
      overviewheading: "Course Specific Eligibility",
      overviewpara : "Eligibility requirements differ by course. Check the individual course description for specific prerequisites, such as prior coursework, skills, or experience.",
    },
  ];

  return (
    <div className="containadmissionprocess">
      <h1>Admission Process Overview</h1>
    <div className="questions">
      {questions.map((overviewheading, index) => (
        <Question
          key={index}
          overviewheading={overviewheading.overviewheading}
          overviewpara ={overviewheading.overviewpara }
        />
      ))}
    </div>
    </div>
  );
};

export default Questions;

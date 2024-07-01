import React from "react";
import "./newAdmissionProcess.css";
import register_img from "../images/newAdmissionImages/register_img.png";
import application_img from "../images/newAdmissionImages/application_img.png";
import payfees_img from "../images/newAdmissionImages/payfees_img.png";
import final_submission_img from "../images/newAdmissionImages/final_submission_img.png";

const NewAdmissionProcess = () => {
  return (
    <div className="main-NewAdmissionProcess">
      <h1 className="headerStyle">ADMISSION PROCESS</h1>
      <div className="admission-process-container">
        <div className="box-container">
          <div className="register-box process-box">
            <img
              src={register_img}
              alt="Register"
              className="register-img box-icon"
            />
            <text className="process-box-text">Register Your Self</text>
          </div>

          <div className="application-box process-box">
            <img
              src={application_img}
              alt="Application"
              className="application-img box-icon"
            />
            <text className="process-box-text">Fill the Application</text>
          </div>

          <div className="payfee-box process-box">
            <img
              src={payfees_img}
              alt="Pay Fees"
              className="payfees-img box-icon"
            />
            <text className="process-box-text">Pay the Fees</text>
          </div>

          <div className="final-submission-box process-box">
            <img
              src={final_submission_img}
              alt="Final Submission"
              className="finalsubmission-img box-icon"
            />
            <text className="process-box-text">Final Submission</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAdmissionProcess;

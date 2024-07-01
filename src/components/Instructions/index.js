import React from "react";
import instructionImg from "../images/Instructions.svg";
import "./instruction.css";
const Instruction = () => {
  return (
    <>
      <div style={{ padding: "56px 72px 56px 72px" }}>
        <span style={{ fontSize: "32px", fontWeight: "500"}}>
          Instructions Guidelines
        </span>
        <div style={{ display: "flex", marginTop: "38px" }}>
          <img height={570} style={{ height: "485px" }} src={instructionImg} />
          <div className="instructions">
            <h2 style={{ textAlign: "start" }}>Admission Guidelines for the Academic Year 2024-25 </h2>
            <p style={{ textAlign: "start" }}>
              Candidates seeking admission for 2024-25 academic year must follow
              the guidelines below and ensure all required documents are in
              order. The admission process involves filling out the admission
              form at the institute and presenting the necessary documents for
              verification.
            </p>
            <ul style={{paddingLeft:"2px" }}>
              <li><b>Complete Forms Only:</b> Incomplete forms will NOT be accepted.</li>
              <li>
              <b>Document Preparation:</b> Have all necessary documents ready before filling out the form.
              </li>
              <li>
              <b>Contact Information:</b> Provide an active mobile number and email ID for further communication.
              </li>
              <li>
              <b>Registration Number:</b> Always mention your registration number in any communication; it will also be your user ID.
              </li>
              <li>
              <b>Mandatory Fields:</b> Fill all sections marked with an asterisk (*).
              </li>
              <li>
              <b>Form Submission:</b> Use the ‘Next’ button to save each page and click ‘Finish’ to submit the form.
              </li>
            </ul>
            <div className="contact">
              <p style={{textAlign:"start"}}>
                For any assistance, please contact:
                <ul style={{paddingLeft:"2px"}}>
                  <li>Ms. Roopanjali at <a href="tel:+919971600288">+91-99716 00288</a> </li>
                  <li>Mr. Nirdosh at  <a href="tel:+918527017776">+91-8527017776</a></li>
                  <li>Email:<a href="enquirieshrit@gmail.com"> enquirieshrit@gmail.com</a></li>
                </ul>
              </p>
              <p style={{textAlign:"start"}}>
              We look forward to your application and wish you the best of luck in the admission
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Instruction;

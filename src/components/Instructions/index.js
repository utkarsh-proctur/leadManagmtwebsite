import React from "react";
import instructionImg from "../images/Instructions.svg";
import "./instruction.css";
const Instruction = () => {
  return (
    <>
      <div style={{ padding: "56px 72px 56px 72px" }}>
        <span style={{ fontSize: "32px", fontWeight: "500" }}>
          Instructions Guidelines
        </span>
        <div style={{ display: "flex", marginTop: "38px" }}>
          <img height={570} style={{ height: "485px" }} src={instructionImg} />
          <div className="instructions">
            <h2 style={{ textAlign: "start" }}>Instructions</h2>
            <p style={{ textAlign: "start" }}>
              Candidates seeking admission for 2024-25 academic year must follow
              the guidelines below and ensure all required documents are in
              order. The admission process involves filling out the admission
              form at the institute and presenting the necessary documents for
              verification.
            </p>
            <ul style={{ textAlign: "start" }}>
              <li>Incomplete forms will NOT be accepted.</li>
              <li>
                Before filling the form please keep all your documents ready to
                fill the details.
              </li>
              <li>
                Fill active Mobile number and Email ID as same will be used for
                further communication.
              </li>
              <li>
                Always mention your Registration number for any further
                communication with us.
              </li>
              <li>
                Your Registration number will be your user ID for login purpose.
              </li>
              <li>
                Fill all the sections with * mark as it is mandatory
                information.
              </li>
              <li>
                Click on ‘Next’ button to save the page and finally clicked on
                the ‘Finish’ to submit the form.
              </li>
            </ul>
            <div className="contact">
              <p>
                For any assistance call: Ms Roopanjali -{" "}
                <a href="tel:+919971600288">+91-99716 00288</a> and Mr Nirdosh -{" "}
                <a href="tel:+918527017776">+91-8527017776</a> or mail
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Instruction;

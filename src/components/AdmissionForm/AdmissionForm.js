import React, { useState } from "react";
import './AdmissionForm.css'
import captchaimg from '../images/captchaimg.png';
import camelize from './../../../node_modules/dom-helpers/esm/camelize';
function Admissionform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [higherQualification, setHigherQualification] = useState("");
  const [courseApplied, setCourseApplied] = useState("");
  const [courseMode, setCourseMode] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", {
      name,
      email,
      mobileNumber,
      otp,
      higherQualification,
      courseApplied,
      courseMode,
      captcha,
      isAuthorized,
    });
  };

  return (
    <div className="containadmissionform">
      <button type="button" id="admissionFormRegisterBtn">Register</button>
      <button type="button" id="admissionFormLoginBtn">Login</button>
      <form onSubmit={handleSubmit}>
        <div className="formdetails">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number *</label>
          <div className="mobile-number-input">
            <select value="+91" disabled>
              <option value="+91">+91</option>
            </select>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter Mobile Number"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="otp">Enter OTP *</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="higherQualification">
            Higher Qualification *
          </label>
          <select
            id="higherQualification"
            value={higherQualification}
            onChange={(e) => setHigherQualification(e.target.value)}
            required
          >
            <option value="">Select Higher Qualification</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="B.Arch">B.Arch</option>
            <option value="M.Arch">M.Arch</option>
            <option value="B.Com">B.Com</option>
            <option value="M.Com">M.Com</option>
            <option value="B.A">B.A</option>
            <option value="M.A">M.A</option>
            <option value="B.Sc">B.Sc</option>
            <option value="M.Sc">M.Sc</option>
            <option value="B.B.A">B.B.A</option>
            <option value="M.B.A">M.B.A</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courseMode">Course Mode *</label>
          <select
            id="courseMode"
            value={courseMode}
            onChange={(e) => setCourseMode(e.target.value)}
            required
          >
            <option value="">Select Course Mode</option>
            <option value="offline">offline</option>
            <option value="online">online</option>
            <option value="both">both</option>
            <option value="fulltime">fulltime</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courseApplied">Course Applied *</label>
          <select
            id="courseApplied"
            value={courseApplied}
            onChange={(e) => setCourseApplied(e.target.value)}
            required
          >
            <option value="">Select Course Applied</option>
            <option value="B.Tech">B.Tech</option>
          </select>
        </div>
        </div>
        <div className="form-group">
          <div className="captchainputandimg">
          <div className="captcha-container">
            {/* <span>ABc453#</span>
            <button type="button" disabled>
              <span className="material-icons">refresh</span>
            </button> */}
            <img src={captchaimg} alt="captcha" className="captcha-img" />

          </div>
          <div className="captchainput">
          <label htmlFor="captcha">Enter Captcha *</label>
          <input
            type="text"
            id="captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />
          </div>

         
          </div>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="isAuthorized"
            checked={isAuthorized}
            onChange={(e) => setIsAuthorized(e.target.checked)}
          />
          <label htmlFor="isAuthorized">
            I authorize to contact me with updates/ notifications via Email/
            SMS/ Whatsapp/ Call, which overrides DND/NDNC registration
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admissionform;

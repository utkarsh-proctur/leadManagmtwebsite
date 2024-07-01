import React, { useEffect, useState } from "react";
import "./AdmissionForm.css";
import captchaimg from "../images/captchaimg.png";
import camelize from "./../../../node_modules/dom-helpers/esm/camelize";
import refresh from "../images/refersh.png";
import captchacode from "../images/captch.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
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

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const doSubmit = () => {
    let user_captcha_value =
      document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha_value) == true) {
      alert("Captcha Matched");
    } else {
      alert("Captcha Does Not Match");
    }
  };

  return (
    <div className="containadmissionform">
      <div className="col mt-3">
        <LoadCanvasTemplate />
      </div>
      <div className="col mt-3">
        <div>
          <input
            placeholder="Enter Captcha Value"
            id="user_captcha_input"
            name="user_captcha_input"
            type="text"
          ></input>
        </div>
      </div>

      <div className="col mt-3">
        <div>
          <button class="btn btn-primary" onClick={() => doSubmit()}>
            Submit
          </button>
        </div>
      </div>
      <div className="admissionFormLoginBtn">
        <button type="button" id="admissionFormRegisterBtn">
          Register
        </button>
        <button type="button" id="admissionFormLoginBtn">
          Login
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formdetails">
          <div className="form-group">
            <label htmlFor="name">
              Name <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </label>
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
            <label htmlFor="email">
              Email <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </label>
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
            <label htmlFor="mobileNumber">
              Mobile Number{" "}
              <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </label>

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
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#065AA9",
                display: "flex",
                marginTop: "6px",
                marginBottom: "-4px",
              }}
            >
              Send OTP
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="otp">
              Enter OTP{" "}
              <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </label>
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
              Higher Qualification{" "}
              <span style={{ color: "red", marginLeft: "4px" }}>*</span>
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
            <label htmlFor="higherQualification">
              City <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </label>
            <select
              id="higherQualification"
              value={higherQualification}
              onChange={(e) => setHigherQualification(e.target.value)}
              required
            >
              <option value="">Select Your City</option>
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
            <label htmlFor="higherQualification">
              State{" "}
              <span color="red">
                <span style={{ color: "red", marginLeft: "4px" }}>*</span>
              </span>
            </label>
            <select
              id="higherQualification"
              value={higherQualification}
              onChange={(e) => setHigherQualification(e.target.value)}
              required
            >
              <option value="">Select Your State</option>
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
            <label htmlFor="courseMode">
              Course Mode{" "}
              <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </label>
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
            <label htmlFor="courseApplied">
              Course Applied{" "}
              <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </label>
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
          <div className="form-group"></div>
          <div className="form-group" style={{ backgroundColor: "#D5E8F7" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                height: "100%",
              }}
            >
              <img style={{ height: 31, width: 147 }} src={captchacode} />
              <img style={{ height: 20, width: 20 }} src={refresh} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Enter Captcha{" "}
              <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Captcha"
              required
            />
          </div>
        </div>

        <div className="formSubmit" style={{ marginTop: "12px" }}>
          <input
            type="checkbox"
            id="isAuthorized"
            checked={isAuthorized}
            onChange={(e) => setIsAuthorized(e.target.checked)}
          />
          <label htmlFor="isAuthorized" style={{ textAlign: "justify" }}>
            *I authorize to contact me with updates/ notifications via Email/
            SMS/ Whatsapp/ Call, which overrides DND/NDNC registration
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admissionform;

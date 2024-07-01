import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import procturlogo from "../images/procturlogo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section university">
          <h1>HRIT</h1>
          <h3>UNIVERSITY</h3>
          <p>
            HRIT Group excels academically, supported by alumni and top
            companies, founded by Dr. Anil Agarwal, MP, offering diverse
            courses.
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/hritgi194/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF3VeyNcJouyQAAAZBeGXDgG6ZN-aRz1pOSY-t5kgS5siszz9UMSxMOdjoh2WBAAB0OwRGgk332O_jyCjv10oJE93cPUmc3ZAZEkt3dKXuSKhMIlTl3CDI4fP7thtE4Lmtu778=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhr-institute-of-technology
              "
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/Hritgroupofinstitutions/"
              target="_blank"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com/@hrituniversity9606"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="linkUl">
          <h4>Link</h4>
          <ul>
            <li>Links</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="addressUl">
          <h4>Address</h4>
          <ul>
            <li>
              <IoHomeOutline className="adressicon" />
              8th kilometer, Milestone Delhi, Meerut Rd, Jalalabad 0069 Morta,
              Ghaziabad, Uttar Pradesh 201003
            </li>
            <li>
              <IoCallOutline className="adressicon" />
              9971600288
            </li>
            <li>
              <MdOutlineEmail className="adressicon" />
              enquirieshrit@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2016 - 2017 Hrit.ac.in. All rights reserved.</p>
        <img
          style={{
            backgroundColor: "#FAFAFA",
            height: 51,
            width: 120,
            borderRadius: 5,
          }}
          src={procturlogo}
        ></img>
      </div>
    </div>
  );
};

export default Footer;

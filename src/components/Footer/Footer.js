import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containfooter">
        <div className="row">
          <div className="col-md-4">
            <img src="/proctur-logo.png" alt="Proctur Logo" className="footer-logo" />
            <p>Simplifying Education Management</p>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i> Ground Floor, H-146 & 147, Sector 63
                Rd, Noida, Uttar Pradesh 201301
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> 99718 39153
              </li>
              <li>
                <i className="fas fa-envelope"></i> Inquiry@proctur.com
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Solutions</h3>
            <ul>
              <li>
                <a href="#">For Coaching Institutes</a>
              </li>
              <li>
                <a href="#">For Schools</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Student Attendance Management</a>
              </li>
              <li>
                <a href="#">Online Teaching Platform</a>
              </li>
              <li>
                <a href="#">Online Exam Software</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter Email" />
              <button type="submit">Subscribe</button>
            </form>
            <p>Subscribe to our Newsletter</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">© 2022 Eduspace Technologies Pvt. Ltd. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
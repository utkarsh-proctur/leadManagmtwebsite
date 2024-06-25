import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import './Footer.css'
const Footer = () => {
  return (

    <div className="footer">

        <div className="footer-content">
            <div className="footer-section university">
            <h1>HRIT</h1>
            <h3>UNIVERSITY</h3>
            <p>HRIT Group excels academically, supported by alumni and top companies,
                founded by Dr. Anil Agarwal, MP, offering diverse courses.</p>
                <div className="social-icons">
             <FaInstagram />
             <FaTwitter />
             <FaFacebook />
             <FaLinkedin />
           </div>
         
        </div>
        <div className='linkUl'>
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

                <li><IoHomeOutline className='adressicon'/>8th kilometer, Milestone Delhi, Meerut Rd, Jalalabad 0069 Morta, Ghaziabad, Uttar Pradesh 201003</li>
                <li><IoCallOutline className='adressicon'/>9971600288</li>
                <li><MdOutlineEmail className='adressicon'/>enquirieshrit@gmail.com</li>
                
            </ul>
        </div>
       
        </div>
        <div className="footer-bottom">
        <p>Copyright © 2016 - 2017 Hrit.ac.in. All rights reserved.</p>
        <p>Powered by Proctur</p>
      </div>
    </div>
  );
}

export default Footer;

import React, { useState, useEffect } from 'react';
import "./Recruiters.css"
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img6 from "../images/6.png";
import img5 from "../images/5.png";
function Slideshow() {


  return (
    <div className="wrapper">
        <h1>Our Top Recruiters</h1>
    <div className="photobanner">
      <img
        className="first"
        src={img1}
        alt=""
      />
      <img
        src={img2}
        alt=""
      />
      <img
        src={img3}
        alt=""
      />
      <img
        src={img5}
        alt=""
      />
      <img
        src={img6}
        alt=""
      />
      <img
        src={img2}
        alt=""
      />
      <img
        src={img3}
        alt=""
      />
      <img
        src={img5}
        alt=""
      />
      <img
        src={img6}
        alt=""
      />
    </div>
  </div>
  

  );
}

export default Slideshow;
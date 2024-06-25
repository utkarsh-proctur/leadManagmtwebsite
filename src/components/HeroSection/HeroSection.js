import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import img1 from "../images/hritherosectionimg.png";
import img2 from "../images/hritgroupofinstitutions.png";
import img3 from "../images/hritherosectionimg.png";
import img4 from "../images/hritgroupofinstitutions.png";
import admissionImg from "../images/admissionlinkimg.png"; 


const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(img1);
  const [dots, setDots] = useState(Array(4).fill(false));
  const images = [img1, img2, img3, img4];


  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (images.indexOf(currentImage) + 1) % images.length;
      setCurrentImage(images[nextImageIndex]);
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentImage]);

  const handleDotClick = (index) => {
    setCurrentImage(images[index]);
  };



  return (
    <section className="hero-section">
      <img src={currentImage} alt="Hero Image" className="hero-image" />
      <div className="hero-content">
      <img src={admissionImg} alt="Admission Image"  className="admission-img" />
      </div>
      <div className="dots">
        {dots.map((dot, index) => (
          <span
            key={index}
            className={`dot ${dot ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

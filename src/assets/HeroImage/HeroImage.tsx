// import React from 'react'
import hero from "/main-illustration.svg";
import "./HeroImage.scss";

const HeroImage = () => {
  return (
    <div className="image__container">
      <img src={hero} alt="hero-image" className="hero__image" />
    </div>
  );
};

export default HeroImage;

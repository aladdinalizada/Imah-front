import React from "react";
// import Images and icons
import heroImg from "/assets/pages/hero/hero.png?url";
import right from "/assets/icons/arrow-right.svg?url";
// import Styles
import "./hero.css";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h1>Create a modern and unique design your dream</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          dui tellus commodo convallis. Auctor eget orci pharetra non. Integer
          lorem in scelerisque tortor dui tempor
        </p>
        <button className="heroBtn">
          VIEW A PROJECT <img src={right} alt="" />
        </button>
      </div>
      <div className="heroImg">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;

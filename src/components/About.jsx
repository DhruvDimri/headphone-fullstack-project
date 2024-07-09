import React from "react";
import "./about.css";
import airdope from "../assets/airpod2.jpeg"

const About = () => {
  return (
    <div className="container about">
      <div className="about-wrapper">
        <div className="about-text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magnam illo? Aspernatur laborum sunt facere tempora assumenda tenetur molestiae odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magnam illo? Aspernatur laborum sunt facere tempora assumenda tenetur molestiae odio.</p>
            <button className="about-button">READ MORE &gt;</button>
        </div>
        <div className="about-img-wrapper">
            <img src={airdope} alt="sorry" width="450px" height="406px" className=""/>
        </div>
      </div>
    </div>
  );
};

export default About;

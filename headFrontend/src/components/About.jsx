import React from "react";
import "./about.css";
import airdope from "../assets/airpod2.jpeg"
import { useNavigate, useLocation } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(){
    navigate("/about");
  }

  return (
    <div className={location.pathname === "/about" ? "aboutt" : "container about"}>
      <div className={location.pathname === "/about" ? "about-wrapperr" : "about-wrapper"}>
        <div className="about-text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magnam illo? Aspernatur laborum sunt facere tempora assumenda tenetur molestiae odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magnam illo? Aspernatur laborum sunt facere tempora assumenda tenetur molestiae odio.</p>
            <button className="about-button" onClick={handleClick}>READ MORE &gt;</button>
        </div>
        <div className="about-img-wrapper">
            <img src={airdope} alt="sorry" width="450px" height="406px" className="about-image"/>
        </div>
      </div>
    </div>
  );
};

export default About;

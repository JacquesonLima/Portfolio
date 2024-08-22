import React from "react";
import "./Sidebar.css";
import js from "../assets/js.png";
import java from "../assets/java.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import react from "../assets/react.png";
import python from "../assets/python.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon-container">
        <img src={js} alt="JavaScript" className="icon" />
        <img src={java} alt="Java" className="icon" />
        <img src={html} alt="HTML5" className="icon" />
        <img src={css} alt="CSS3" className="icon" />
        <img src={react} alt="React" className="icon" />
        <img src={python} alt="Python" className="icon" />
        <img src={js} alt="JavaScript" className="icon" />
        <img src={java} alt="Java" className="icon" />
        <img src={html} alt="HTML5" className="icon" />
        <img src={css} alt="CSS3" className="icon" />
        <img src={react} alt="React" className="icon" />
        <img src={python} alt="Python" className="icon" />
        <img src={js} alt="JavaScript" className="icon" />
        <img src={java} alt="Java" className="icon" />
        <img src={html} alt="HTML5" className="icon" />
        <img src={css} alt="CSS3" className="icon" />
        <img src={react} alt="React" className="icon" />
        <img src={python} alt="Python" className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;

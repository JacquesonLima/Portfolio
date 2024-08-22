import React from "react";
import "./ProjectCard.css";

const ProjetcCard = ({ image, title, description, link }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="nooper noreferrer"
        className="overlay"
      >
        <p className="overlay-icon">
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
      </a>
    </div>
  );
};

export default ProjetcCard;

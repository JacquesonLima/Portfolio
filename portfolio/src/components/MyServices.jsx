import React from "react";
import "./MyServices.css";

const MyServices = ({ img, title, description }) => {
  return (
    <div className="service">
      <div className="service-image">
        <a href="/">{img}</a>
      </div>
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default MyServices;

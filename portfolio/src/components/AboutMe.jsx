import React from "react";
import "./AboutMe.css";
import perfil from "../assets/perfil.jpg";

const AboutMe = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-img">
        <img src={perfil} alt="Foto de Perfil" width={400} />
      </div>
      <div className="about-content">
        <h1 className="about-title">
          Sobre <span>Mim</span>
        </h1>
        <h3>Um pouco sobre quem eu sou...</h3>
        <p>
          Sou um Desenvolvedor fullstack, com conhecimento holístico em algumas
          linguagens: Java, HTML, CSS, Javascript e algumas
          bibliotecas/frameworks como: Spring Boot e React. Unindo estes
          conhecimentos, busco sempre o equilibrio entre a estética e a
          funcionalidade, fazendo de cada projeto uma oportunidade de adquirir
          conhecimento e criar experiências memoráveis.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

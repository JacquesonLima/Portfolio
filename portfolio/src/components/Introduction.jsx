import React from "react";
import "./Introduction.css";
import avatar from "../assets/avatar.png";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction-content">
        <div className="introduction-info">
          <h1>
            <span>Fullstack</span> Developer
          </h1>
          <p>
            Desenvolvedor de software apaixonado por tecnologia, dedicado a
            criar aplicações funcionais, seguras, e escaláveis, sempre seguindo
            as boas práticas de programação. Meu foco em Fullstack me ajuda a
            ter uma visão mais ampla no desenvolvimento dos meus projetos e me
            dá uma vantagem incrível de poder trabalhar com diversas linguagens.
          </p>
          <ul className="introduction-links">
            <li>
              <a href="https://github.com/JacquesonLima" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${"jacquesonbenevides@gmail.com"}`}
                style={{ textDecoration: "none" }}
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jacquesonlima/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="avatar">
          <img src={avatar} alt="Imagem de perfil" width={300} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

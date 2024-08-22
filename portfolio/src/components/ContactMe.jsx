import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="name-and-fone">
        <form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome completo"
          />
          <input
            type="text"
            name="fone"
            id="fone"
            placeholder="Número de telefone"
          />
        </form>
      </div>
      <div className="email">
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Endereço de e-mail"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Assunto do e-mail"
          />
        </form>
      </div>
      <form>
        <textarea
          name="message"
          id="message"
          placeholder="Sua mensagem"
        ></textarea>
      </form>
      <input type="submit" value="Enviar Mensagem" className="button" />
    </div>
  );
};

export default ContactMe;

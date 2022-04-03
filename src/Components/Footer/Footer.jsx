import React from "react";
import styles from "./footer.scss";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="ConteinerFooter">
    <footer>
      <ul>
        <li>
          <span>Acerca de nosotros</span>
        </li>
        <li>
          <Link to="seguridad">Seguridad</Link>
        </li>
        <li>
          <Link to="/privacidad">Privacidad</Link>
        </li>
        <li>
          <Link to="/tos">Terminos y condiciones</Link>
        </li>
      </ul>

      <ul >
        <li>
          <span>Contacto</span>
        </li>
        <li>
          <Link to="/t">Acerca de nosotros</Link>
        </li>
        <li>
          <Link to="/">Contactenos</Link>
        </li>
        <li>
          <Link to="/">Preguntas frecuentes</Link>
        </li>
      </ul>

      <ul >
        <li>
          <span>Mi cuenta</span>
        </li>
        <li>
          <Link to="/iniciosesion">Iniciar Sesion</Link>
        </li>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
      </ul>
    </footer>
    </div>
  );
};

export default Footer;


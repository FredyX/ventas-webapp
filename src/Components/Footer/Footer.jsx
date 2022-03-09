import React from "react";
import userDataService from "../../services/users.service";
import { Link } from "react-router-dom";
import styles from "\footer.scss";

const Footer = () => {

    return(
        <footer classname="foot">
        <div classname="conteiner">
        <Row classname="ro">
          <Column classname = "col">
            <Heading>Acerca de nosotros</Heading>
            <FooterLink href="#">Seguridad</FooterLink>
            <FooterLink href="#">Privacidad</FooterLink>
            <FooterLink href="#">Terminos y condiciones</FooterLink>
          </Column>

          <Column classname = "col">
            <Heading classname="he">Contactos y categorias</Heading>
            <FooterLink href="#">Categorias</FooterLink>
            <FooterLink href="#">Departamentos</FooterLink>
            <FooterLink href="#">Contactenos</FooterLink>
          </Column>

          <Column classname = "col">
            <Heading>Mi cuenta</Heading>
            <FooterLink href="#">Iniciar Sesion</FooterLink>
            <FooterLink href="#">Registro</FooterLink>
          </Column>
         
        </Row>
        </div>
        </footer>
    );
export default Footer;

}
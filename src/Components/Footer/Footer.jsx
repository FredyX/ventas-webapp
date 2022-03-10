import React from "react";
import userDataService from "../../services/users.service";
import { Link } from "react-router-dom";
import styles from ".//footer.scss";
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  box-shadow: 20px 20px 20px 0 rgba(0, 0, 0, 0.19);
  outline: solid rgb(18, 183, 0);
  background-color: #1b1b1b;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;
const Heading = styled.p`
  padding: 30px 0px;
  font-size: 24px;
  color: #12b700;
  margin-bottom: 5px;
  font-weight: bold;
`;
export class Footer extends React.Component {
  render(){
    return(
    <footer classname="foot">
      <div classname="conteiner">
        <Row classname="ro">
          <Column/>
          <Column classname="col">
            <Heading>Acerca de nosotros</Heading>
            <FooterLink href="#">Seguridad</FooterLink>
            <FooterLink href="#">Privacidad</FooterLink>
            <FooterLink href="#">Terminos y condiciones</FooterLink>
            <FooterLink/>
          </Column>

          <Column classname="col">
            <Heading classname="he">Contacto</Heading>
            <FooterLink href="#">Contactenos</FooterLink>
            <FooterLink href="#">Preguntas frecuentes</FooterLink>
          </Column>

          <Column classname="col">
            <Heading>Mi cuenta</Heading>
            <FooterLink href="#">Iniciar Sesion</FooterLink>
            <FooterLink href="#">Registro</FooterLink>
          </Column>

        </Row>
      </div>
    </footer>
);
}
}
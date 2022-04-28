import React from 'react';

import Seccion1 from "../Home/Secciones/Seccion1";
import Seccion2 from "../Home/Secciones/Seccion2";
import styles from "../../Tarjeta/Card.module.scss";
import Footer from "../../Footer/Footer";
export const Home = () => {
  return (
    <main>
      <Seccion1 />
      <Seccion2 />
      <Footer />
    </main>
  )
}

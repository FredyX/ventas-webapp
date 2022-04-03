import React from 'react';
import Navbar from "../../Navbar/Navbar";
import Card from "../../Tarjeta/Card";
import styles from "../../Tarjeta/Card.module.scss";
import Footer from "../../Footer/Footer";

export const Home = () => {
  return (
    <main>
      <Navbar></Navbar>
      <div className={styles.Card}>
      <Card/>
      </div>
      <Footer />
    </main>
  )
}

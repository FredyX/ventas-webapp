import React from 'react';
import Navbar from "../../Navbar/Navbar";
import styles from "../../Tarjeta/Card.module.scss";
import Footer from "../../Footer/Footer";
import BarChartCategoria from '../../Charts/BarChartCategoria';
import BarChartSuscripcione from '../../Charts/BarChartSuscripcione';
import BarChartDepartamento from '../../Charts/BarChartDepartamento';
export const Home = () => {
  return (
    <main>
      <Navbar></Navbar>
      <div className={styles.Card}>
        <br></br>
        <br></br>
        <BarChartCategoria />
        <br></br>
        <BarChartSuscripcione />
        <br></br>
        <BarChartDepartamento />
        <br></br>
        <br></br>
        <br></br>
        <br></br>        
        <br></br>
        <br></br>
        <br></br>
        <br></br>        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </main>
  )
}

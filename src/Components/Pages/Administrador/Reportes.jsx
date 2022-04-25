import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar"
import { NavLink, Link } from "react-router-dom";
import { green } from '@mui/material/colors';
import styles from "../../Navbar/Navbar.module.scss";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Footer from "../../Footer/Footer";
import  "./PerfilAdmin.scss";
import BarChartCategoria from '../../Charts/BarChartCategoria';
import BarChartSuscripcione from '../../Charts/BarChartSuscripcione';
import BarChartDepartamento from '../../Charts/BarChartDepartamento';

export const Reportes = () => {

      
    const ColoredLine = ({ color }) => (
        <hr
          style={{
            color,
            backgroundColor: color,
            height: 3,
            marginTop: 15,
            marginLeft: 20,
            marginRight: 20,
          }}
        />
      );
    
    
      const style = {
        fontWeight: "bold",
        color: "#dc3545"
      };

     


   
    return (
        <main>
            <div className={styles.navbar_container}>
                <nav>
                {/* LOGO */}
                <div className={styles.brand_logob}>
                    <Link to="/">SWAPPER</Link>
                </div>
                </nav>
                <ColoredLine color="black" />
            </div>

        
                <button type="button2" className="btnregresarAGG" >
                <div className="regresar">
                <KeyboardBackspaceRoundedIcon  fontSize="medium" sx={{ color: green[500] }} />  <a href="javascript:history.back()">  Regresar
      </a> </div>
                </button>

        <div className="basecontainerReportes" > 
       
        <div className="MisSus_title">Reportes</div>  
        <styleColums>
      <ul >
        <li>
        <div className="formRep" > 
        <BarChartCategoria />
    </div>
                                                
        </li>
        <li>
        <div className="formRep" > 
    <BarChartSuscripcione />
    </div>
                                          
        </li>
        <li>
      
    <div className="formRep" > 
    <BarChartDepartamento />
    </div>
                                              
        </li>
      </ul>
    </styleColums>
  
    </div>
    <Footer/>
   
        
   
    </main>
    )
}



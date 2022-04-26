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
import suscriptionsDataService from "../../../services/suscriptions.service";
import categoriesService from "../../../services/categories.service.js";
import reportDataService from "../../../services/report.service";
export const Reportes = () => {
    const [categorias, setCategorias] = useState({});
    const [seleCat, setSeleCat] = useState(1);
    const [selePro, setSelePro] = useState(5);
    const [seleSus, setSeleSus] = useState(3);

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

    const getCategorias = async () => {
        const {data} = await categoriesService.getAll();        
        let cat = {};
        data.map(c => {
            cat[c.id] = c.categorie_name;
        });
        setCategorias(cat);        
    }
    useEffect( () =>{
        getCategorias();
    },[]);

   const handleSelectCat =  ({target}) => {    
    setSeleCat(target.value);    
   }
   const handleSelectPro = ({target}) => {
    setSelePro(target.value);
   }
   const handleSelectSus = ({target}) => {
    setSeleSus(target.value);
   }
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
        <select onChange={handleSelectPro}>
            <option > Seleccione el limite</option>
            <option value={1}>{'Limite en '+1}</option>
            <option value={2}>{2}</option>
            <option value={3}>{3}</option>
            <option value={5}>{5}</option>
        </select>
        <BarChartCategoria selePro={selePro}/>
    </div>
                                                
        </li>
        <li>
        <div className="formRep" > 
        <select onChange={handleSelectSus}>
            <option > Seleccione el limite</option>
            <option value={1}>{1}</option>
            <option value={2}>{2}</option>
            <option value={3}>{3}</option>
            <option value={4}>{4}</option>
            <option value={5}>{5}</option>
        </select>
    <BarChartSuscripcione seleSus={seleSus}/>
    </div>                                          
        </li>
        <li>
        <select onChange={handleSelectCat}>
            <option >Seleccionar la categoría </option>
            {
                Object.keys(categorias).map(key => {
                    let label = categorias[key];
                    let value = key;
                    return (                              
                        <option value={value}>{label}</option>            
                    )
                })
            }                        
        </select>
    <div className="formRep" > 
    
    <BarChartDepartamento idC={seleCat}/>
    
    </div>
        </li>
      </ul>
    </styleColums>
  
    </div>
    <Footer/>
    </main>
    )
}



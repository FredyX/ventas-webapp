import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar"
import { NavLink, Link } from "react-router-dom";
import { green } from '@mui/material/colors';
import styles from "../../Navbar/Navbar.module.scss";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Footer from "../../Footer/Footer";
import  "./Suscripciones.scss";
import PinnedSubheaderList from '../../AgregarProducto/checkboxlist';
import { useForm } from '../../../hooks/useFormProducts';
import productDataService from "../../../services/product.service";
import { validateFormProducts } from "../../../helpers/validateForm";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const SuscripcionN = () => {

    const {
      
        stateForm,
        errors,
        handleCategories,
     
      } = useForm({
        categories: '',
      }, validateFormProducts, productDataService);
      
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

            <Link to={"/perfilusuario/suscripcion/"}>
                <button type="button2" className="btnregresarAGG" >
                <div className="regresar">
                <KeyboardBackspaceRoundedIcon fontSize="medium" sx={{ color: green[500] }} /> Regresar
                </div>
                </button>
            </Link>

     
     

        <div className="basecontainerSus" >
                <div className="formSus" >
                <div className="Sus_title">Suscripción</div>
                <styleColums>
      <ul>
        <li>
                <div className="formS" >

                <span>Seleccione una o más categoría</span>
                    <PinnedSubheaderList passCategoriesChange={handleCategories} />

                    </div>
                    <div className="formS" >
                    <div className="caja">
                      <select name="diapreferencia">
                        <option >Seleccionar día para recibir correo</option>
                        <option value={"L"}>Lunes</option>
                        <option value={"M"}>Martes</option>
                        <option value={"X"}>Miércoles</option>
                        <option value={"J"}>Jueves</option>
                        <option value={"V"}>Viernes</option>
                        <option value={"S"}>Sábado</option>
                        <option value={"D"}>Domingo</option>
                      </select>
                    </div>
                    </div>
                    <div className="formS" >
                    <div className="caja">
                      <select name="department_id" >
                        <option >Seleccione un departamento</option>
                        <option value={1}>Atlántida</option>
                        <option value={2}>Choluteca</option>
                        <option value={3}>Colón</option>
                        <option value={4}>Comayagua</option>
                        <option value={5}>Copán</option>
                        <option value={6}>Cortés</option>
                        <option value={7}>El Paraíso</option>
                        <option value={8}>Francisco Morazán</option>
                        <option value={9}>Gracias a Dios</option>
                        <option value={10}>Intibucá</option>
                        <option value={11}>Islas de la Bahía</option>
                        <option value={12}>La Paz</option>
                        <option value={13}>Lempira</option>
                        <option value={14}>Ocotepeque</option>
                        <option value={15}>Olancho</option>
                        <option value={16}>Santa Bárbara</option>
                        <option value={17}>Valle</option>
                        <option value={18}>Yoro </option>
                      </select>
                    </div>
                    </div>
                    <div className="formS" >
                    <div className="caja">
                      <select name="department_id" >
                        <option >Puntuación mínima del vendedor</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                    </div>
                    </div>
                    </li>
      </ul>

      <ul >
        <li>
                    <div className="formSPri">Seleccione la prioridad</div>
                    <div className="formSPr" >

                    <FormControl>
                        
                        <RadioGroup
                            column
                            aria-labelledby="prioridad"
                            name="prioridadCorreo"
                            
                        >
                            <FormControlLabel  value="P" control={<Radio size="small" />} label="Precio del producto" />
                            <FormControlLabel value="V" control={<Radio size="small"/>} label="Puntuación del vendedor" />
                            <FormControlLabel  value="A" control={<Radio size="small"/>} label="Antiguedadd de la publicación" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div className="formSB" >
                    <button type="button" className="btn" >
                        Confirmar
                      </button>
                      <div>
                      <Link to={"/perfilusuario/suscripcion/"}>
                      <button type="button" className="btn2">
                        Cancelar
                      </button>
                    </Link>
                      </div>
                     
                </div>
                </li>
      </ul>
    </styleColums>
                    
                </div>
            </div>

         <Footer/>
  
        </main>
    )
}



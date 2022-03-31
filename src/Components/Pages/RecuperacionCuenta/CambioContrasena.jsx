import React from "react";
import { Link } from "react-router-dom";
import { useFormCambio } from '../../../hooks/useFormCambio';
import styles from "../../Navbar/Navbar.module.scss";
import {validateFormCambioPassword} from '../../../helpers/validateForm'
import  userDataService  from '../../../services/users.service'
export const CambioContrasena = (props) => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const user_email = urlParams.get('user_email');
    const token = urlParams.get('token');
    console.log(user_email);
    console.log(token);
    const {
       handleInputChange,
       handleSubmit,
       handleBlur,
      errors 
      } = useFormCambio({
        user_password: '',
        user_password2: ''  
      },token, user_email, validateFormCambioPassword,userDataService);
    
    const style = {
      fontWeight: "bold",
      color: "#dc3545"
    };
  
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
  
  
    return (
      <div>
        <div className={styles.navbar_container}>
        <nav>
          {/* LOGO */}
          <div className={styles.brand_logob}>
            <Link to="/">SWAPPER</Link>
          </div>
          </nav>
        <ColoredLine color="black" />
        </div>
        
      <div className="base-container" >
        <div className="registro-form" >
          <div className="header">Cambio de contraseña</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <input
                   type="password"
                   name="user_password"
                   placeholder="Contraseña Nueva"
                   onChange={handleInputChange}
                   onBlur={handleBlur}
                />
                {/*
                  errors.user_password &&
                  <p style={style}> {errors.user_password}</p>
    */}
              </div>
              <div className="form-group">
                <input
                   type="password"
                   name="user_password2"
                   placeholder="Confirmar Contraseña Nueva"
                   onChange={handleInputChange}
                   onBlur={handleBlur}
                />
                {/*
                  errors.user_password2 &&
                  <p style={style}> {errors.user_password2}</p>
  */}
              </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={handleSubmit}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }

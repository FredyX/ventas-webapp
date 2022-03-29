import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Navbar/Navbar.module.scss";


export const RecuperacionCuenta = (props) => {

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
          <div className="header">Recuperación de cuenta</div>
          <span>Recibirás un correo electrónico con un enlace para recuperar tu cuenta</span>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <input
                  type="text"
                  name="user_email"
                  placeholder="Correo electrónico"
                />
              </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" >
              Enviar Correo
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
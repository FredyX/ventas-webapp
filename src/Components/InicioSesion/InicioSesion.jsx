import React from "react";
import AuthService from "../../services/auth.service";
import { Link } from "react-router-dom";
import { validateFormLogin } from "../../helpers/validateForm";
import { useForm } from '../../hooks/useFormInicioSesion';

export const InicioSesion = (props) => {

  const {
    stateForm,
    errors,
    handleInputChange,
    handleBlur,
    handleSubmit
  } = useForm({
    user_email: '',
    user_password: '',
  }, validateFormLogin, AuthService);


  const style = {
    fontWeight: "bold",
    color: "#dc3545"
  };


  return (
    <div className="base-container" >
      <div className="registro-form" >
        <div className="header">Inicio de Sesión</div>
        <div className="header2">Introduce tus credenciales</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <input
                type="text"
                name="user_email"
                value={stateForm.user_email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Correo electrónico"
              />
              {
                errors.user_email &&
                <p style={style}> {errors.user_email}</p>
              }
            </div>
            <div className="form-group">
              <input
                type="password"
                value={stateForm.user_password}
                name="user_password"
                onChange={handleInputChange}
                placeholder="Contraseña"
                onBlur={handleBlur}
              />

              {
                errors.user_password &&
                <p style={style}> {errors.user_password}</p>
              }
            </div>
          </div>

        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handleSubmit}>
            Iniciar sesión
          </button>
          <span className="content">¿No tienes cuenta?, puedes crear una en:</span>
          <Link to={"/registro/"}><button type="button2" className="btn2" >
            Registro
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
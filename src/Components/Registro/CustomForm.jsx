import React from "react";
import userDataService from "../../services/users.service";
import { Link } from "react-router-dom";
import { validateForm } from "../../helpers/validateForm";
import { useForm } from '../../hooks/useFormRegistro';

export const CustomForm = (props) => {

  const {
    stateForm,
    errors,
    handleInputChange,
    handleBlur,
    handleSubmit,
    handleClick
  } = useForm({
    first_name: '',
    last_name: '',
    user_email: '',
    user_password: '',
    user_password2: '',
    department_id: ''
  }, validateForm, userDataService);

  const style = {
    fontWeight: "bold",
    color: "#dc3545"
  };

  return (
    <div className="base-container" >
      <div className="registro-form" >
        <div className="header">Creación de cuenta</div>
        <div className="header2">Introduce tus datos para registrarte</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <input
                type="text"
                value={stateForm.first_name}
                name="first_name"
                onChange={handleInputChange}
                placeholder="Nombre"
                onBlur={handleBlur}
              />
              {
                errors.first_name &&
                <p style={style}> {errors.first_name}</p>
              }
            </div>
            <div className="form-group">
              <input
                type="text"
                value={stateForm.last_name}
                name="last_name"
                onChange={handleInputChange}
                placeholder="Apellido"
                onBlur={handleBlur}
              />
              {
                errors.last_name &&
                <p style={style}> {errors.last_name}</p>
              }
            </div>
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
            <div className="form-group">
              <input
                type="password"
                value={stateForm.user_password2}
                name="user_password2"
                onChange={handleInputChange}
                placeholder="Contraseña"
                onBlur={handleBlur}
              />

              {
                errors.user_password2 &&
                <p style={style}> {errors.user_password2}</p>
              }
            </div>
            <div className="caja">
              <select name="department_id" value={stateForm.department_id} onChange={handleInputChange}>
                <option >Seleccione su departamento</option>
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
            <div className="form-check">
              <input
                type="checkbox"
                name="terms"
                onClick={handleClick}
              />
              <span>He leído y acepto los {<Link to={"/tos/"} target="_blank" className="link">
                <span>terminos y condiciones</span>
              </Link>} de uso.</span>
            </div>
          </div>

        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handleSubmit}>
            Crear cuenta
          </button>
          <span> Ya estas registrado, inicia sesión aqui:</span>
          <Link to={"/iniciosesion/"}><button type="button2" className="btn2" >
            Iniciar Sesión
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
import React from "react";

export class Registro extends React.Component {
 

  render() {
    return (
      <div className="base-container" >
        <div className="registro-form" >
        <div className="header">Creación de cuenta</div>
        <div className="header2">Introduce tus datos para registrarte</div>
        <div className="content">
 
          <div className="form">
            <div className="form-group">
              <input type="text" name="Nombre" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <input type="text" name="Apellido" placeholder="Apellido" />
            </div>
            <div className="form-group">
              <input type="text" name="Email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" name="Telefono" placeholder="Telefono" />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="text" name="Contraseña" placeholder="Contraseña" />
            </div>
            <div class="caja">
            <select name="Departamento">
            <label htmlfor="Departemento"></label>
              <option value="Atlántida">Atlántida</option>
              <option value="Choluteca">Choluteca</option>
              <option value="Colón">Colón</option>
              <option value="Comayagua">Comayagua</option>
              <option value="Copán">Copán</option>
              <option value="Cortés">Cortés</option>
              <option value="El Paraíso">El Paraíso</option>
              <option value="Francisco Morazán">Francisco Morazán</option>
              <option value="Gracias a Dios">Gracias a Dios</option>
              <option value="Intibucá">Intibucá</option>
              <option value="Islas de la Bahía">Islas de la Bahía</option>
              <option value="La Paz">La Paz</option>
              <option value="Lempira">Lempira</option>
              <option value="Ocotepeque">Ocotepeque</option>
              <option value="Olancho">Olancho</option>
              <option value="Santa Bárbara">Santa Bárbara</option>
              <option value="Valle">Valle</option>
              <option value="Yoro">Yoro </option>
            </select>
            </div>
            <div className="form-check">
              <input type="checkbox" name="Correo"/> 
              <span >Quiero recibir comunicaciones sobre promociones y novedades a mi correo.</span> 
              <input type="checkbox" name="Terminos"/> 
              <span >He leído y acepto las condiciones de uso y la Politica de privacidad.</span> 
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Crear cuenta
          </button>
          <button type="button2" className="btn">
            Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}
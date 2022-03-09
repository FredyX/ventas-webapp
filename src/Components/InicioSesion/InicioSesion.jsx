import React from "react";
import userDataService from "../../services/users.service";
import { Link } from "react-router-dom";

export class InicioSesion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmitLogin() {
    let data = {
      user_email: this.state.user_email,
      user_password: this.state.user_password
    }

    userDataService.login(data)
      .then(response => {
        this.setState({
          user_email: "",
          user_password: ""
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="base-container" >
        <div className="registro-form" >
          <div className="header">Inicio de Sesión</div>
          <div className="header2">Introduce tus credenciales</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <input type="text" value={this.state.user_email} name="user_email" onChange={(e) => this.handleInputChange(e)} placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" value={this.state.user_password} name="user_password" onChange={(e) => this.handleInputChange(e)} placeholder="Contraseña" />
              </div>
            </div>

          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={this.handleSubmitLogin}>
              Iniciar Sesión
            </button>
            <span className="header2">¿No tienes cuenta?, puedes crear una en:</span>
            <Link to ={"/registro/"}>
            <button type="button" className="btn2" >
              Registro
            </button>
            </Link>
          </div>


        </div>
      </div>
    );
  }
}
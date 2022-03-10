import React from "react";
import userDataService from "../../services/users.service";
import { Link } from "react-router-dom";
import { regularExp } from "../../helpers/regularExp";

export class Registro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      user_email: "",
      user_password: "",
      department_id: "",
      errors:{}      
    };
    this.style = {
      fontWeight: "bold",
      color:"#dc3545"
    };    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.isObjectEmpty = this.isObjectEmpty.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  isObjectEmpty(obj) {
    for (let  prop in obj){
      if(obj.hasOwnProperty(prop))return false;    
    }

    return true;
  }
  handleSubmit() {
    if(this.isObjectEmpty(this.state.errors)){
    
      let data = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        user_email: this.state.user_email,
        user_password: this.state.user_password,
        department_id: this.state.department_id,
        is_company: false
      }

      userDataService.register(data)
        .then(response => {
          this.setState({
            first_name: "",
            last_name: "",
            user_email: "",
            user_password: "",
            department_id: ""
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }else{
      alert('Campos incompletos no se puede crear la cuenta');
    }
  }

  handleBlur(e) {
    //this.handleInputChange(e);
    const errores = this.validateForm();
    const name  = 'errors';
    this.setState({
      [name]:errores
    });
    console.log(errores);
  }
  validateForm(){    
    let errors = {};
    if (!this.state.first_name.trim()){
      errors.first_name = 'El campo del nombre es obligatorio';
    }
    if(!this.state.last_name.trim()){
      errors.last_name = 'El campo apellido es obligatorio';
    }
    if(!this.state.user_email.trim()){
      errors.user_email = 'El email es obligatorio';
    }else{
      const {email} = regularExp;
      let arrayMatch = email.exec(this.state.user_email.trim());
      console.log(arrayMatch);
      if(!arrayMatch){
        errors.user_email = 'El correo electrónico no es válido';        
      }      
    }
    if(!this.state.user_password.trim()){
      errors.user_password = 'La contraseña es obligatoria';
    }
    return errors;
  }

  render() {
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
                  value={this.state.first_name}
                  name="first_name"
                  onChange={(e) => this.handleInputChange(e)}
                  placeholder="Nombre" 
                  onBlur={(e) => this.handleBlur(e)}
                  />
                  {
                    this.state.errors.first_name &&
                    <p style={this.style}> {this.state.errors.first_name}</p>
                  }
              </div>
              <div className="form-group">
                <input
                 type="text" 
                 value={this.state.last_name} 
                 name="last_name" 
                 onChange={(e) => this.handleInputChange(e)} 
                 placeholder="Apellido"
                 onBlur={(e) => this.handleBlur(e)}
                 />
                 {
                    this.state.errors.last_name &&
                    <p style={this.style}> {this.state.errors.last_name}</p>
                 }
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  value={this.state.user_email} 
                  name="user_email" 
                  onChange={(e) => this.handleInputChange(e)} 
                  placeholder="Email"
                  onBlur={(e) => this.handleBlur(e)}
                />
                {
                    this.state.errors.user_email &&
                    <p style={this.style}> {this.state.errors.user_email}</p>
                 }
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  value={this.state.user_password} 
                  name="user_password" 
                  onChange={(e) => this.handleInputChange(e)} 
                  placeholder="Contraseña"
                  onBlur={(e) => this.handleBlur(e)} 
                />

                {
                    this.state.errors.user_password &&
                    <p style={this.style}> {this.state.errors.user_password}</p>
                 }
              </div>
              <div className="caja">
                <select name="department_id" value={this.state.department_id} onChange={(e) => this.handleInputChange(e)}>
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
                <input type="checkbox" name="terms" />
                <span>He leído y acepto los {<Link to={"/tos/"} target="_blank" className="link">
                  <span>terminos y condiciones</span>
                  </Link>} de uso.</span>
              </div>
            </div>

          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={this.handleSubmit}>
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
}
import React from 'react'
import { Link } from "react-router-dom";
import userDataService from "../../services/users.service";
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import styles from "./AgregarProducto.scss";

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 2000 px;
`;

const Row = styled.div`
display: flex;
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
grid-gap: 50px;
box-shadow: 20px 20px 20px 0 rgba(0, 0, 0, 0.19);
outline: solid rgb(18, 183, 0);
background-color: #ffffff; 
position: center;
bottom: 0;
width: 100%;
`;
  
export class AgregarProducto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: "",
          price: "",
          category: "",
          state: "",
          description: ""   
  
        };    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.isObjectEmpty = this.isObjectEmpty.bind(this);
      }
  
  
      handleInputChange(event) {
          const target = event.target;
          const value = target.value;
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
              title: this.state.first_name,
              price: this.state.last_name,
              category: this.state.user_email,
              state: this.state.user_password,
              description: this.state.department_id,
            }
 
            userDataService.register(data)
              .then(response => {
                this.setState({
                  title: "",
                  price: "",
                  category: "",
                  state: "",
                  description: ""
                });
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
          }else{
            alert('Debe llenar todos los campos');
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
          if (!this.state.title.trim()){
            errors.title = 'El campo del título es obligatorio';
          }
          if(!this.state.price.trim()){
            errors.price = 'El campo precio es obligatorio';
          }
          if(!this.state.description.trim()){
              errors.description = 'El campo descripción es obligatorio';
          }
          return errors;
        }
  
        

    render() {
        return (
    
            <div classname="conteiner">
              <Row classname="ro">
              <Column classname="col">
                
              </Column>
              <Column classname="col">
                <div className="base-container1">
         
                  <div className="agregarproducto-form" >
                  <div className="header">Agregar producto</div>
                  <div className="header2">Porfavor ingresa la información de tu producto</div>
                  <div className="content">
                    <div className="form">
                      <div className="form-group">
                        <input
                          type="text"
                          value={this.state.title}
                          name="title"
                          onChange={(e) => this.handleInputChange(e)}
                          placeholder="Título" 
                          onBlur={(e) => this.handleBlur(e)}
                          />
                      </div>

                      <div className="form-group">
                        <input
                        type="text" 
                        value={this.state.price} 
                        name="price" 
                        onChange={(e) => this.handleInputChange(e)} 
                        placeholder="Precio"
                        onBlur={(e) => this.handleBlur(e)}
                        />
                      </div>

                      <div className="caja">
                        <select name="category" value={this.state.category} onChange={(e) => this.handleInputChange(e)}>
                          <option >Categoría</option>
                          <option value={1}>Ropa</option>
                          <option value={2}>Cocina</option>
                          <option value={3}>Repuestos</option>
                        </select>
                      </div>

                      <div className="caja">
                        <select name="state" value={this.state.state} onChange={(e) => this.handleInputChange(e)}>
                          <option >Estado</option>
                          <option value={1}>Nuevo</option>
                          <option value={2}>Usado</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <input 
                          type="text" 
                          value={this.state.description} 
                          name="description" 
                          onChange={(e) => this.handleInputChange(e)} 
                          placeholder="Descripción"
                          onBlur={(e) => this.handleBlur(e)}
                        />
                      </div>

                      </div>
                          <div className="footer">
                          <button type="button" className="btn" onClick={this.handleSubmit}>
                              Agregar producto
                          </button>
                          <Link to ={"/"}>
                          <button type="button" className="btn2" >
                          Cancelar
                          </button>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div>
                </Column>
                <Column classname="col">

                <div className="base-container2">

                  <div className="imageproduct-form" >
                  <div className="header2">Imagenes añadidas</div>
                  <div className="content">
                    <div className="form">
                
                      <div className="cajaimagen">
                        
                      </div>


                      <div className="form-group">
                          <input
                              type="file"
                              accept="image/*"
                              style={{ display: 'none' }}
                              id="contained-button-file"
                          />
                          <label htmlFor="contained-button-file">
                              <Button type="button2" variant="contained" className="btn2" component="span">
                              Cargar imagenes
                              </Button>
                          </label>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                </Column>
              </Row>
            </div>

        );
        
    }
}



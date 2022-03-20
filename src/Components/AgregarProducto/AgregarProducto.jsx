import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import styles from "./AgregarProducto.scss";
import CheckboxList from './checkboxlist';
import PinnedSubheaderList from './checkboxlist';
import DragAreaPrincipal from './imagenprevious';
import DragArea from "./images.jsx/imagen1";
import { validateFormProducts } from "../../helpers/validateFormProducts";
import { useForm } from '../../hooks/useFormProducts';
import  productDataService  from "../../services/product.service";


export const AgregarProducto = (props) => {

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

  
const {
  stateForm,
  errors,
  handleInputChange,
  handleBlur,
  handleSubmit,
  handleClick
} = useForm({
  title: '',
	price: '',
	category: '',
	state: '',
	description: '',
	imagen: '',
}, validateFormProducts, productDataService);

const styles = {
  fontWeight: "bold",
  color: "#dc3545"
};


        return (
          <div>
          <br />
          <div className="cajaimagen">
              <div class="grid-container">
              <div class="grid-item tall">                                                   
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
                          name="title"
                          placeholder="Título" 
                          value={stateForm.title}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          />
                           {
                          errors.title &&
                          <p style={styles}> {errors.title}</p>
                        }
                      </div>

                      <div className="form-group">
                        <input
                        type="text" 
                        name="price" 
                        placeholder="Precio"
                        value={stateForm.price}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        />
                        {
                          errors.price &&
                          <p style={styles}> {errors.price}</p>
                        }
                      </div>

                      <div className="caja">
                      <select name="state"  value={stateForm.state} onChange={handleInputChange}>
                          <option >Estado</option>
                          <option value={1}>Nuevo</option>
                          <option value={2}>Usado</option>
                        </select>
                      </div>

                      <div className="form-group2">
                        <input 
                          type="text" 
                          name="description" 
                          placeholder="Descripción"
                          value={stateForm.description}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                        />
                        {
                            errors.description &&
                            <p style={styles}> {errors.description}</p>
                          }
                      </div>

                      <span>Seleccione una o varias categorías</span>
                      <PinnedSubheaderList/>                 
                      </div>
                          <div className="footer">
                          <button type="button" className="btn" onClick={handleSubmit}>
                              Agregar producto
                          </button>
                          <Link to ={"/"}>
                          <button type="button" className="btn2" onClick={handleSubmit}>
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
                  <div className="header2">Imagenes del producto</div>
                    <div className="form">                      
                    <DragArea />
                      </div>
                    </div>
                  </div>
                </Column>
              </Row>
            </div>
 
              </div>
              <div class="grid-item tall">
                             
              </div>
              <div class="grid-item tall">
              
              
              </div>              
          </div>
          </div>
      </div>
                   );
 
}
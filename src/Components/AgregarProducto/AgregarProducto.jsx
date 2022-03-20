import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import styles from "./AgregarProducto.scss";
import CheckboxList from './checkboxlist';
import PinnedSubheaderList from './checkboxlist';
import DragAreaPrincipal from './imagenprevious';


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
                          name="title"
                          placeholder="Título" 
                          />
                      </div>

                      <div className="form-group">
                        <input
                        type="text" 
                        name="price" 
                        placeholder="Precio"
                        />
                      </div>

                      <div className="caja">
                        <select name="state"  >
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
                        />
                      </div>

                      <span>Seleccione una o varias categorías</span>
                      <PinnedSubheaderList/>                 
                      </div>
                          <div className="footer">
                          <button type="button" className="btn" >
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
                  <div className="header2">Imagenes del producto</div>
                    <div className="form">

                      <DragAreaPrincipal/>

                      </div>
                    </div>
                  </div>
                </Column>
              </Row>
            </div>
        );
 
}
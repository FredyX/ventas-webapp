import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useSearchParams } from "react-router-dom";
import "./ModificarUsuario.scss";


const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: center;
  width: 100%;
  `;

const Row = styled.div`
  display: flex;
  grid-template-columns: auto-fill;
  grid-gap: 0px;
  background-color: #ffffff; 
  position: center;
  bottom: 0;
  width: 100%;
  `;

  export const ModificarUsuario = () => {


    return(
        <div>
            <Row className="ro">

                <Column className="col">
                <div className="basecontainer4" >
                    <div className="basecontainer1">
                        <div className="imageproductform" >
                            <img src="C:\Users\Jonathan\Desktop\Probando.jpg"  className="image"  />
                        </div>
                    </div>
                    <div className="basecontainer3">
                            <div className="detallevendedorform" >
                                <p className="Score">Puntuacion del Vendedor:</p>
                            </div>
                    </div>
                  </div>
                </Column>
                <Column className="col">
                    <div className="basecontainer2" >
                        <div className="basecontainer2">
                        <div className="detallevendedorform2" >
                            <div className="form-group" >

                               
                                    <input type="text" placeholder="Nombre" className="info"/>
                                
                                    <input type="text" placeholder="Apellido" className="info"/>
                              
                                    <input type="text" placeholder="Correo" className="info"/>
                               
                                    <input type="text" placeholder="Pass" className="info"/>
                                   
                                    <input type="text" placeholder="Departamento" className="info"/>
                            </div>

                            <div className="footer">
                            <button type="button" className="btn">
                                Guardar
                            </button>

                            </div>
                        </div>
                        <div className="basecontainer3">
                            
                        </div>
                        </div>
                    </div>
                </Column>
            </Row>
        </div>
    )
  }
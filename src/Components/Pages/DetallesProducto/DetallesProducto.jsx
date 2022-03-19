
import { render } from "@testing-library/react";
import React from "react";
import styled from 'styled-components';
import "./DetallesProducto.scss";


const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

const Row = styled.div`
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
    box-shadow: 20px 20px 20px 0 rgba(0, 0, 0, 0.19);
    outline: solid rgb(18, 183, 0);
    background-color: ##ffffff; 
    position: relative;
    bottom: 0;
    width: 100%;
`;


export const DetallesProducto = () => {
    
        return(
            <div>
                    <Row className="ro">
                        <Column className="col1">
                            <div className="base-container1"> 
                                        <img src="" alt="" height="500px" width="500px" />
                            </div>
                        </Column>
                        <Column className="col2">
                            <div className="base-container2"> 
                                <p className="Titulo">Titulo</p>
                                <p className="Estado">Nuevo</p>
                                <p className="Precio">20,000</p>
                                <p className="Descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ad iure fugit eligendi, commodi velit recusandae corporis ab at veniam neque sit vitae voluptatum eveniet consequuntur labore ipsum delectus eum!</p>

                            </div>
                        </Column>
                    </Row>
            </div>
            )
    }


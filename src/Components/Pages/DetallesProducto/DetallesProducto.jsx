/*
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { ConstructionOutlined } from "@mui/icons-material";
import { render } from "@testing-library/react";
import React,{useEffect,useState} from "react";
import styled from 'styled-components';
import "./DetallesProducto.scss";
import productDataService from "/Users/Jonathan/Documents/Proyecto_IS/ventas-webapp/src/services/product.service.js"

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
    const [titulo, setTitulo] = useState(' ');
    const [precio, setPrecio] = useState(' ');
    const [estado, setEstado] = useState(' ');
    const [descripcion, setDescripcion] = useState(' ');

    useEffect( ()=> {
        ProductsApi();
    })

    const ProductsApi = async () => {
        const response = await productDataService.get(5);
        console.log(response.status);
        setTitulo(response.data.productoRespuesta.product.product_name);
        setPrecio(response.data.productoRespuesta.product.price);
        setEstado(response.data.productoRespuesta.product.state);
        setDescripcion(response.data.productoRespuesta.product.product_description);
        }
        
       return(
            <div>
                    <Row className="ro">
                        <Column className="col1">
                            <div className="base-container1"> 
                                        <img src="" alt="" height="400px" width="400px" />
                            </div>
                        </Column>
                        <Column className="col2">
                            <div className="base-container2"> 
                                <p className="Titulo">{titulo}</p>
                                <p className="Estado">{estado}</p>
                                <p className="Precio">Precio: {precio}</p>
                                <p className="Descripcion">{descripcion}</p>

                            </div>
                        </Column>
                    </Row>
            </div>
            )
        }   
*/
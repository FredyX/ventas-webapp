import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useSearchParams } from "react-router-dom";
import  "./DetallesProducto.scss";
import productDataService from "../../../services/product.service"



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

const setState = (state, callback) => {
    if (state === "N") {
        return callback("Nuevo");
    } else if (state === "U") {
        return callback("Usado");
    } else if (state === "R") {
        return callback("Reaccondicionado");
    } else if (state === "D") {
        return callback("Dañado");
    }
}


export const DetallesProducto = () => {
    const [titulo, setTitulo] = useState(' ');
    const [precio, setPrecio] = useState(' ');
    const [estado, setEstado] = useState(' ');
    const [descripcion, setDescripcion] = useState(' ');
    const [departamento, setDepartamento] = useState(' ');
    const [imagen, setImagen] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [score, setScore] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        setCategorias([1]);
        ProductsApi();
    }, [])

    const ProductsApi = async () => {
        let cat = [];
        let id = searchParams.get('id');
        const response = await productDataService.getDetalle(id)
        const {producto,categorias,imagenesRes} = response.data;

        for (let i = 0; i < categorias.length; i++) {
            let nuevaCategoria = [categorias[i].id, categorias[i].categorie_name];
            cat.push(nuevaCategoria);
        }
        setCategorias(cat);

        setNombreUsuario(producto[0].first_name + " " + producto[0].last_name);
        setScore(producto[0].score);
        setTitulo(producto[0].product_name);
        setPrecio(producto[0].price);
        setDepartamento(producto[0].department_name);
        setState(producto[0].state, setEstado);
        setDescripcion(producto[0].product_description);
        setImagen(`http://localhost:3001/${imagenesRes[0]}`);
    }


    return (
        <div>
            <Row className="ro">

                <Column className="col">
                <div className="basecontainer4" >
                    <div className="basecontainer1">
                        <div className="imageproductform" >
                            <img src={imagen} className="image"/>
                        </div>
                    </div>
                    <div className="basecontainer3">
                            <div className="detallevendedorform" >

                                <p className="NombreUsuario">Nombre del vendedor: {nombreUsuario}</p>


                                <p className="Score">Puntuación del Vendedor: {score}</p>
                                </div>
                            </div>
                  </div>
                </Column>
                <Column className="col">
                    <div className="basecontainer2" >
                        <div className="basecontainer2">
                            <div className="detalleproductoform" >
                               
                                    <p className="Titulo">{titulo}</p>
                                
                                    <p className="Estado">Estado: {estado}</p>
                              
                                    <p className="Precio">Precio: {precio}</p>
                               
                                    <p className="Categorias">Categorias:  </p>
                                    <ul className="ul">
                                            {categorias && categorias.map((categoria, index) =>
                                                <li key={index} className="Categorias2">
                                                    <p>{categoria[1]}</p>
                                                </li>
                                            )}
                                    </ul>
                                    <p className="Departamento">Departamento: {departamento}</p>
                            </div>
                        </div>
                        <div className="basecontainer3">
                            <div className="descriptionform" >

                            <p className="Descripcion">Descripción: {descripcion}</p>
                            
                                </div>
                            </div>
                    </div>
                </Column>
            </Row>
        </div>
    )
}   

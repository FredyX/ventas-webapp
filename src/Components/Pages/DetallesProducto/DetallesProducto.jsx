import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useSearchParams } from "react-router-dom";
import styles from "./DetallesProducto.scss";
import productDataService from "../../../services/product.service"
import usersService from "../../../services/users.service";
import categoriesService from "../../../services/categories.service";
import departmentService from "../../../services/departments.service";



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
        const producto = await productDataService.get(id);
        const imagenes = await productDataService.getImagen(producto.data.productoRespuesta.product.id);
        const usuario = await usersService.getToProfile(producto.data.productoRespuesta.product.user_seller_id);
        const departamento = await departmentService.get(producto.data.productoRespuesta.product.department_id);
        for (let i = 0; i < producto.data.productoRespuesta.categorias.length; i++) {
            let nuevaCategoria = await categoriesService.get(producto.data.productoRespuesta.categorias[i]);
            nuevaCategoria = [nuevaCategoria.data.id, nuevaCategoria.data.categorie_name];
            cat.push(nuevaCategoria);
        }
        setCategorias(cat);

        setNombreUsuario(usuario.data.first_name + " " + usuario.data.last_name);
        setScore(usuario.data.score);
        setTitulo(producto.data.productoRespuesta.product.product_name);
        setPrecio(producto.data.productoRespuesta.product.price);
        setDepartamento(departamento.data.department_name);
        setState(producto.data.productoRespuesta.product.state, setEstado);
        setDescripcion(producto.data.productoRespuesta.product.product_description);
        setImagen(`http://localhost:3001/${imagenes.data[0]}`);
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


                                <p className="Score">Puntuacion del Vendedor: {score}</p>
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

import React, { useEffect, useState } from "react";
import styles from "./ProductosUsuario.module.scss";
import Card from "../../../Components/Tarjeta/Card";
import { useSearchParams } from "react-router-dom";
import productDataService from "../../../services/product.service";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

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


const ProductosUsuario = () => {
    const [titulo, setTitulo] = useState(' ');
    const [precio, setPrecio] = useState(' ');
    const [estado, setEstado] = useState(' ');
    const [descripcion, setDescripcion] = useState(' ');
    const [departamento, setDepartamento] = useState(' ');
    const [imagen, setImagen] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [score, setScore] = useState('');
    const [fecha, setDate] = useState('');
    const [estadoVenta, setIsSelling] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        ProductsApi();
    }, [])

    const ProductsApi = async () => {
        let id = searchParams.get('id');
        let page = searchParams.get('page')
        const response = await productDataService.getProductUser(id,page)
        const {producto,imagenesRes} = response.data;


        setDate(producto[0].date_added);
        setIsSelling(producto[0].is_selling);
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
    <main>
      <Navbar></Navbar>
    <section className={styles.ProductosUsuario}>
      <div className={styles.ProductosUsuario_title}>
        <h1>Productos</h1>
      </div>

      <div className={styles.ProductoContainer}>
      <div className={styles.cards}>
          <Card
           info= {{
              id: undefined,
              imageSource: imagen,
              descripcion: descripcion,
              estado: estado,
              fecha: fecha,
              estadoVenta: estadoVenta,
              departamento: departamento,
              precio: precio,
              titulo: titulo,
              score: score,
              nombreUsuario: nombreUsuario,
            }}
            />
      </div>
      </div>
    </section>
    <Footer/>
    </main>
  );
};

export default ProductosUsuario;
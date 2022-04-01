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
    const [ProductosUsuario, setProductosUsuario] = useState([]);


    useEffect(() => {
        setProductosUsuario([]);
        ProductsApi();
    }, [])

    const ProductsApi = async () => {
        let dat = [];
        let id = searchParams.get('id');
        let page = searchParams.get('page')
        const response = await productDataService.getProductUser(id,page)
        console.log(response);
        const {data} = response.data;

        for (let i = 0; i < data.length; i++) {
          let nuevadata = [data[i].date_added,data[i].is_selling,data[i].first_name + " " + data[i].last_name,
          data[i].score,data[i].product_name,data[i].price,data[i].department_name,
          data[i].state,data[i].product_description,data[i].image_name];
          dat.push(nuevadata);

        setDate(data[i].date_added);
        setIsSelling(data[i].is_selling);
        setNombreUsuario(data[i].first_name + " " + data[i].last_name);
        setScore(data[i].score);
        setTitulo(data[i].product_name);
        setPrecio(data[i].price);
        setDepartamento(data[i].department_name);
        setState(data[i].state, setEstado);
        setDescripcion(data[i].product_description);
        setImagen(data[i].image_name);       
      }
      
      setProductosUsuario(dat);
      console.log(dat);
    }

  return (
    <main>
      <Navbar></Navbar>
    <section className={styles.ProductosUsuario}>
      <div className={styles.ProductosUsuario_title}>
        <h1>Productos</h1>
      </div>

      <div className={styles.ProductoContainer}>
        {ProductosUsuario.map((id)=>{
          return(
            <div key={id} className={styles.cards}>
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
          );
          })}
      </div>
    </section>
    <Footer/>
    </main>
  );
};

export default ProductosUsuario;
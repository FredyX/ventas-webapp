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
          let nuevadata = [setDate(data[i].date_added),data[i].is_selling,data[i].first_name + " " + data[i].last_name,
          data[i].score,data[i].product_name,data[i].price,data[i].department_name,
          data[i].state,data[i].product_description,data[i].image_name];
          dat.push(nuevadata);    
      }
      
      setProductosUsuario(dat);
      console.log(dat);

      setDate(data[0].date_added);
      setIsSelling(data[0].is_selling);
      setNombreUsuario(data[0].first_name + " " + data[0].last_name);
      setScore(data[0].score);
      setTitulo(data[0].product_name);
      setPrecio(data[0].price);
      setDepartamento(data[0].department_name);
      setState(data[0].state, setEstado);
      setDescripcion(data[0].product_description);
      setImagen(data[0].image_name); 
    }

  return (
    <main>
      <Navbar></Navbar>
    <section className={styles.ProductosUsuario}>
      <div className={styles.ProductosUsuario_title}>
        <h1>Productos</h1>
      </div>

      <div className={styles.ProductoContainer}>
        {ProductosUsuario.map((index)=>{
          return(
            <div key={index} className={styles.cards}>
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
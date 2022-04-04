import React, { useEffect, useState } from "react";
import styles from "./ProductosUsuario.module.scss";
import Card from "../../../Components/Tarjeta/Card";
import { useSearchParams } from "react-router-dom";
import productDataService from "../../../services/product.service";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import authService from "../../../services/auth.service";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [ProductosUsuario, setProductosUsuario] = useState([]);


  useEffect(() => {
    setProductosUsuario([]);
    ProductsApi();
  }, [])

  const ProductsApi = async () => {
    let id = authService.getCurrentUser().user.user_id;
    let page = searchParams.get('page')
    const response = await productDataService.getProductUser(id, page)
    console.log(response);
    if (response.status === 200) {
      const { data } = response.data;
      setProductosUsuario(data);
      console.log(data);
    }
  }

  const getEstado= (state) => {
    if (state === "N") {
      return "Nuevo";
    } else if (state === "U") {
      return "Usado";
    } else if (state === "R") {
      return "Reaccondicionado";
    } else if (state === "D") {
      return "Dañado";
    }
  }

  return (
    <main>
      <Navbar></Navbar>
      <section className={styles.ProductosUsuario}>
        <div className={styles.ProductosUsuario_title}>
          <h1>Productos</h1>
        </div>

        <div className={styles.ProductoContainer}>
        <div className={styles.grid}> 
          {ProductosUsuario.map((producto) => {
            return (
              <div key={producto.id} className={styles.cards}>
                
                <Card
                    info={{
                    id: producto.id,
                    imageSource: `http://localhost:3001/${producto.image_name}`,
                    descripcion: producto.product_description,
                    estado: getEstado(producto.state),
                    fecha: producto.date_added,
                    estadoVenta: producto.is_selling,
                    departamento: producto.department_name,
                    precio: producto.price,
                    titulo: producto.product_name,
                    score: producto.score,
                    nombreUsuario: producto.first_name+" "+producto.last_name,
                  }}
                />
                </div>
              
            );
          })}
        </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductosUsuario;
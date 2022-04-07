import React, { useEffect, useState } from "react";
import styles from "./ProductosUsuario.module.scss";
import Card from "../../../Components/Tarjeta/Card";
import productDataService from "../../../services/product.service";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import authService from "../../../services/auth.service";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

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


  const MensajeEliminar = (e) => {
    const id = e.target.value;
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar el producto?',
      text: "Si no estas seguro, click en cancelar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#12b700',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        productDataService.delete(id);
        Swal.fire({
          title: 'Eliminado',
          text: "Tu producto ha sido eliminado!",
          icon: 'success',
          confirmButtonColor: '#12b700',
          confirmButtonText: 'Listo'
        });
        navigate(0);
      }
    })
  }

  const [ProductosUsuario, setProductosUsuario] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProductosUsuario([]);
    ProductsApi();
  }, [])

  const ProductsApi = async () => {
    let id = authService.getCurrentUser().user.user_id;
    const response = await productDataService.getProductUser(id)
    if (response.status === 200) {
      const { data } = response.data;
      setProductosUsuario(data);
    }
  }

  const getEstado = (state) => {
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
                <div key={producto.id} className={styles.cards} >

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
                      nombreUsuario: producto.first_name + " " + producto.last_name,
                    }}
                  />
                  <button type="button" className={styles.btnEliminarProducto} value= {producto.id} onClick={MensajeEliminar}>
                    Eliminar
                  </button>
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
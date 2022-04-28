import React, { useEffect, useState } from "react";

import styles from "./Seccion2.module.scss";

import Carousel from "../../../Carousel/carousel";
import Card from "../../../../Components/Tarjeta/Card";
import productDataService from "../../../../services/product.service";

import { SwiperSlide } from "swiper/react";

const Seccion_2 = () => {

    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos([]);
        ProductsApi();
      }, [])

      const ProductsApi = async () => {
        
        const response = await productDataService.getProductUser(7);
        if (response.status === 200) {
          const { data } = response.data;
          setProductos(data);
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
      <section className={styles.seccion_2}>
        <div className={styles.seccion_2_title}>
          <h1>Articulos Recientes</h1>
         </div>
  
        <div className={styles.cards}>
          <Carousel>
            {(
              <>
                {Productos.map((producto) => (
                  <SwiperSlide key={producto.id}>
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
                        titulo: undefined,
                        score: producto.score,
                        nombreUsuario: producto.first_name+" "+producto.last_name,
                      }}
                    />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Carousel>
        </div>
      </section>
    );
  };
  
  export default Seccion_2;
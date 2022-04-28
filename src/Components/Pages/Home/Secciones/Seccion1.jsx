import styles from "./Seccion1.module.scss";
import { Link } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import home1 from "../../../../Assets/home1.jpg";


const Seccion1 = () => {


  return (
    <main>
     {/* NAVBAR */}
      <div className={styles.Navbar}>
        <Navbar />
      </div>
    <section className={styles.section_1}>
      {/*IMAGENES DE FONDO */}
      <div className={styles.img}></div>

      {/* SECTION 1 CONTENIDO */}
      <div className={styles.section_1_content}>
        {/* SLOGAN */}
        <div className={styles.slogan}>
          <h1>Aqui encuentras todo lo que necesitas</h1>
          <p>
          Compra y vende artículos en tu zona o recibe avisos de productos nuevos respecto a tus categorias 
          favoritas.
          </p>

     
            {/* BOTON BUSQUEDA*/}
            <button className={styles.btn_search}>
              <Link to="/busqueda">buscar</Link>
            </button>
                  </div>

        {/* IMAGEN SECCION 1 */}
        <div className={styles.slogan_image}>
          <img src={home1} alt="homeimage" />
        </div>
      </div>
    </section>
    </main> 
  );
};

export default Seccion1;
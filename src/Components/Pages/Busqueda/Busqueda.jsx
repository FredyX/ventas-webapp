import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import  "./Busqueda.scss";
import CheckCategorias from '../Busqueda/CheckCategorias';
import { validateFormProducts } from "../../../helpers/validateForm";
import { useForm } from '../../../hooks/useFormProducts';
import productDataService from "../../../services/product.service";
import CheckDepartamento from '../Busqueda/CheckDepartamento';
import { CenterFocusStrong } from '@mui/icons-material';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import PuntuacionVendedor from './PuntuaciónVendedor';
import Paginacion from './Paginacion';
import Card from "../../Tarjeta/Card";
import styles from "../../Pages/ProductosUsuario/ProductosUsuario.module.scss";
import { useSearchParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";



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
  
  export const BusquedaProducto = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [BusquedaProducto, setBusquedaProducto] = useState([]);
  
  
    useEffect(() => {
      setBusquedaProducto([]);
      ProductsApi();
    }, [])
  
    const ProductsApi = async () => {
      /* cambiar las primeras 3 líneas*/
      let id = searchParams.get('id');
      let page = searchParams.get('page')
      const response = await productDataService.getProductUser(id, page)
      console.log(response);
      if (response.status === 200) {
        const { data } = response.data;
        setBusquedaProducto(data);
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


    
  const {
      
    stateForm,
    errors,
    handleCategories,
 
  } = useForm({
    categories: '',
  }, validateFormProducts, productDataService);
  
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 2,
        width: 240,
        marginTop: 20,
        marginBottom: 10,
      }}
    />
  );

  const style = {
    fontWeight: "bold",
    color: "#dc3545"
  };

    return (
      <main>
        <Navbar></Navbar>
        <div className="grid-container">
          <div className="grid-item tall">
            <div className="columns">

    <div className='base-containersearch'>

        <div className="busqueda-form">
        <div className="header">Filtros</div>

        <ColoredLine color="green" />

        <div className="subheader">Categorías</div>

            <CheckCategorias passCategoriesChange={handleCategories} /> 

        </div>

        <ColoredLine color="green" />

        <div className="busqueda-form">
        <div className="subheader">Departamento</div>
        
            <CheckDepartamento /> 
        
        </div>
        
        <ColoredLine color="green" />
 
        <div className="busqueda-form1">
       
        <span>Puntuación del vendedor</span>
        <PuntuacionVendedor /> 
        <ColoredLine color="green" />
        </div>
   

    </div>


    <div className="header">Resultados</div>
    <div className="resultados-form1">
 
 
    <div className={styles.ProductoContainer}>
        <div className={styles.grid}> 
          {BusquedaProducto.map((producto) => {
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

    </div>
        <div className='pagination-form'>
        <Paginacion /> 
        </div>
        <div className="grid-item tall">

</div>
<div className="grid-item tall">


</div>
        </div>
       
        </div>
        
    </div>
  
    <Footer/>
      </main>

    )
  
  }
  
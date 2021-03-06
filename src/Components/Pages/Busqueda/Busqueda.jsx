import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import  "./Busqueda.scss";
import CheckCategorias from '../Busqueda/CheckCategorias';
import { validateFormProducts } from "../../../helpers/validateForm";
import { useForm } from '../../../hooks/useFormProducts';
import productDataService from "../../../services/product.service";
import CheckDepartamento from '../Busqueda/CheckDepartamento';
import PuntuacionVendedor from './PuntuaciónVendedor';
import Paginacion from './Paginacion';
import Card from "../../Tarjeta/Card";
import styles from "../../Pages/ProductosUsuario/ProductosUsuario.module.scss";
import Footer from "../../../Components/Footer/Footer";
import  searchDataService  from "../../../services/search.service";

import { Link } from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import { green } from '@mui/material/colors';

export const BusquedaProducto = () => {
    const [BusquedaProducto, setBusquedaProducto] = useState([]);
    const [stateDepartments, setDepartaments] = useState([]);
    const [search, setSearch] = useState("");
    const [score,setScore] = useState(0);    
    const [page, setPages] = useState(1);
    const [url, setUrl] = useState('');
    const [producto, setProducto] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
      setBusquedaProducto([]);         
    }, [url])
    
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

    const handledKeyPress = async(event) =>{                              
      if(event.keyCode === 13 && !event.shiftKey){
        event.preventDefault();        
        let categories = formatear(stateForm.categories);
        let departamento = formatear(stateDepartments);
        let urlParams = `/${search}&${categories}&${departamento}&${score}`;
        setUrl(urlParams);
        const {data} = await searchDataService.getSearchProduct(urlParams);                             
        setProducto(data.data);
        setTotalPages(data.totalPages);
      }
    }
    
    function formatear (dataArreglo) {
      let cadena = ``;
      if (dataArreglo.length === 0){
        cadena = `null`;
        return cadena;
      }
      dataArreglo.map( (item, index) => {
        if(index === 0){
          cadena = cadena + `${item}`;
        }else{
          cadena = cadena + ',' + `${item}`;
        }
      });

      return cadena;
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

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }


    return (
      
      <main>
        <Navbar setSearch={setSearch} handledKeyPress={handledKeyPress}></Navbar>
          
        <div className="grid-container">
          <div className="grid-item tall">
          
    <div className="basecontainer">
    <Link to={"/"}>
      <button type="button2" className="btnregresar" >
      <div className="regresar">
      <HomeIcon fontSize="medium" sx={{ color: green[500] }} /> Inicio
      </div>
      </button>
      </Link>
    <div className="headerfiltro">Filtros</div>
    <filtros>
      <ul>
        <li>
        <div className="busqueda-form">
        <ColoredLine color="green" />
        <div className="subheader">Categorías</div>
            <CheckCategorias 
              passCategoriesChange={handleCategories}              
            /> 
        </div>
        <ColoredLine color="green" />
        </li>
      </ul>
      <ul >
        <li>
        <ColoredLine color="green" />
        <div className="busqueda-form">
        <div className="subheader">Departamento</div>
            <CheckDepartamento setDepartaments={setDepartaments} /> 
            <ColoredLine color="green" />
        </div>
        </li>
      </ul>
      <ul >
        <li>
        <div className='base-containersearch'>
          <ColoredLine color="green" />
          <div className="busqueda-form1">
          <span>Puntuación del vendedor</span>
          <PuntuacionVendedor setScore={setScore}/> 
          <ColoredLine color="green" />
          </div>
          </div>
        </li>
      </ul>
    </filtros>
    </div>
          <div className="resultados-form1">
              <div className={styles.ProductoContainer}>
                  <div className={styles.grid}> 
                    {producto.map((producto) => {
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
            <div className="columns1">




  
  
    
        <div className='pagination-form'>
        <div className="header">Resultados</div>
        <Paginacion setPages={setPages} total={totalPages} handle = {handledKeyPress}/> 
        </div>
       

        </div>
       
        </div>
        
    </div>
    
    <Footer/>

      </main>

    )
  
  }
  

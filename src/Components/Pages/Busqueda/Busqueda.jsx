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

    return (
      <main>
        <Navbar setSearch={setSearch} handledKeyPress={handledKeyPress}></Navbar>
        <div className="grid-container">
          <div className="grid-item tall">
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

    <div className='base-containersearch'>

        <div className="busqueda-form">
        <div className="header">Filtros</div>

        <ColoredLine color="green" />

        <div className="subheader">Categorías</div>

            <CheckCategorias 
              passCategoriesChange={handleCategories}              
            /> 

        </div>

        <ColoredLine color="green" />

        <div className="busqueda-form">
        <div className="subheader">Departamento</div>
        
            <CheckDepartamento setDepartaments={setDepartaments} /> 
        
        </div>
        
        <ColoredLine color="green" />

        <div className="busqueda-form1">
       
        <span>Puntuación del vendedor</span>
        <PuntuacionVendedor setScore={setScore}/> 
        <ColoredLine color="green" />
        
        </div>
   

    </div>


    <div className="header">Resultados</div>
  
    
        <div className='pagination-form'>
        <Paginacion setPages={setPages} total={totalPages} handle = {handledKeyPress}/> 
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
  

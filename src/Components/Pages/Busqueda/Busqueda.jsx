import React from 'react';
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
import styled from 'styled-components';
import Paginacion from './Paginacion';


const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: center;
  width: fit-content;
  background-color: #ffffff; 

  `;

const Row = styled.div`
  display: flex;
  grid-template-columns: auto-fill;
  grid-gap: 5px;
  background-color: #ffffff; 
  position: center;
  bottom: 0;
  width: 100%;
  `;

export const Busqueda = () => {
    
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

    return (
      <main>
        <Navbar></Navbar>
    <Row className="ro">
        <Column className="col">
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
    </Column>
                <Column className="col">
    <div className='base-containersearch1'>
    <div className="header">Resultados</div>
    <div className="resultados-form1">

    </div>
        <div className='pagination-form'>
        <Paginacion /> 
        </div>
 

    </div>
    </Column>
    </Row>
      </main>

    )
  }
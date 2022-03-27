import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import  "./PerfilUsuario.scss";
import { useSearchParams } from "react-router-dom";
import userDataService from "../../../services/users.service";
import Navbar from "../../Navbar/Navbar"
import { NavLink, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField } from "@mui/material";
import styles from "../../Navbar/Navbar.module.scss";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import { blueGrey, green, grey, lightGreen } from "@mui/material/colors";
import Swal from 'sweetalert2';


const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: center;
  width: 100%;
  
  `;

const Row = styled.div`
  display: flex;
  grid-template-columns: 100%;
  grid-gap: 0px;
  background-color: #ffffff; 
  position: center;
  bottom: 0;
  width: 100%;
  `;



export const PerfilUsuario = () => {
    
    const MensajeEliminar = (e) => {
		Swal.fire({
            title: 'Estas seguro que deseas eliminar el perfil?',
            text: "Si no estas seguro, click en cancelar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#12b700',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire({
                    title: 'Eliminado',
                    text: "Tu perfil ha sido eliminado!",
                    icon: 'success',
                    confirmButtonColor: '#12b700',
                    confirmButtonText: 'Listo'
            }
            )
            } 
    })
	}
    

    const ColoredLine = ({ color }) => (
        <hr
          style={{
            color,
            backgroundColor: color,
            height: 3,
            marginTop: 15,
            marginLeft: 20,
            marginRight: 20,
          }}
        />
      );

    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [score, setScore] = useState('');
    const [is_company, setIs_Company] = useState(' ');
    const [is_admin, setIs_Admin] = useState(' ');
    const [departamento, setDepartamento] = useState(' ');
    const [imagen, setImagen] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
 

    useEffect(() => {
        UsersApi();
    }, [])


    const UsersApi = async () => {
        let id = searchParams.get('id');
        const response = await userDataService.getToProfile(id)
        const {usuario,imagenesRes} = response.data;

        setFirst_Name(usuario[0].first_name)
        setLast_Name(usuario[0].last_name);
        setScore(usuario[0].score);
        setIs_Company(usuario[0].is_company);
        setIs_Admin(usuario[0].is_admin);
        setDepartamento(usuario[0].department_name);
        setImagen(`http://localhost:3001/${imagenesRes[0]}`);
    }


    return (
        <div>
               <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logob}>
          <Link to="/">SWAPPER</Link>
          
        </div>          
          
                
      </nav>
      <ColoredLine color="black" />
    </div>

            <Row className="ro">
                <Column className="col">
                    
                       
                  
                <div className="basecontainer2" >
                    
                        <div className="imageproductform1" >
                            <img src={imagen} className="image"/>
                        </div>
                    
                            <div className="detallevendedorform1" >
                                <p className="score">Puntuación: {score}</p>
                            </div>
                    
                  </div>
                </Column>
                <Column className="col">
                    <div className="basecontainer2" >
                    <div className="titulo1">Mi perfil</div> 
                        <div className="basecontainer2">
                            <div className="detalleuser" >
                            <div className="detalleperfil" >
                                <p className="first_name">Nombre: {first_name}</p>
                                </div>
                                <div className="detalleperfil" >
                                <p className="last_name">Apellido: {last_name}</p>
                                </div>
                                <div className="detalleperfil" >
                                <p className="is_company">Es compañía: {is_company}</p>
                                </div>
                                <div className="detalleperfil" >
                                <p className="is_admin">Es administrador: {is_admin}</p>
                                </div>
                                <div className="detalleperfil" >
                                <p className="departamento">Departamento: {departamento}</p>
                                </div>  
                                <div className="formbotons2">
                                    <Link to={"/modificarusuario"}>
                                    <button type="button" className="btn3">
                                    Modificar perfil
                                    </button>
                                    </Link>
                                </div>                       
                                </div>
                            
                            </div>
                        </div>
                        </Column>
                        <Column className="col">
                        <div className="basecontainer5">
                        <div className="formbotons3" >
                        <div className="formbotons" >
                       
                                    <Link to={"/AgregarProducto"}>
                                    <button type="button" className="btn7">
                                    Agregar producto
                                    </button>
                                    </Link>
                                    </div>
                            <div className="formbotons" >
                                    <button type="button" className="btn7">
                                    Mis productos
                                    </button>
                                    </div>
                            <div className="formbotons" >
                                    <button type="button" className="btn7">
                                    Suscripciones
                                    </button>
                                  
                             
                            </div>
                            <div className="formbotons" >
                       
                                
                                <button type="button" className="btn6" onClick={MensajeEliminar}>
                                Eliminar perfil
                                </button>
                             
                                </div>
                            
                            </div>
                           
                            </div>
                    
                </Column>
            </Row>
        </div>
     
    )
}   

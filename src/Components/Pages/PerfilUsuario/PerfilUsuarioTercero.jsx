import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import "./PerfilUsuario.scss";
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



export const PerfilUsuarioTercero = () => {

  const MensajeDenuncia = (e) => {

    Swal.fire({
      title: '¿Estas seguro que quieres denunciar al usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, denunciar!',
      confirmButtonColor: '#12b700',
      cancelButtonText: 'No, cancelar!',
      cancelButtonColor: '#b70000',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Escribe el motivo de tu denuncia',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Enviar',
          confirmButtonColor: '#12b700',
          showLoaderOnConfirm: true,

          allowOutsideClick: () => !Swal.isLoading()
        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: 'Denuncia Cancelada',
          text: "Tu perfil ha sido eliminado!",
          icon: 'error',
          confirmButtonColor: '#12b700',
          confirmButtonText: 'Listo'
        })
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
  const [departamento, setDepartamento] = useState(' ');
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    UsersApi();
  }, [])


  const UsersApi = async () => {
    let id = searchParams.get('id');
    const response = await userDataService.getToProfile(id)
    const { usuario, imagenesRes } = response.data;

    setFirst_Name(usuario[0].first_name)
    setLast_Name(usuario[0].last_name);
    setScore(usuario[0].score);
    setIs_Company(usuario[0].is_company);

    setDepartamento(usuario[0].department_name);
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
            <div className="detallevendedorform1" >
              <p className="score">Puntuación de vendedor: {score}</p>
            </div>

          </div>
        </Column>
        <Column className="col">
          <div className="basecontainer2" >
            <div className="titulo1">Perfil de Usuario</div>
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
                  <p className="departamento">Departamento: {departamento}</p>
                </div>


              </div>
            </div>
          </div>
        </Column>
        <Column className="col">
          <div className="basecontainer5">
            <div className="formbotons3" >

              <div className="formbotons" >
                <button type="button" className="btn6" onClick={MensajeDenuncia}>
                  Denunciar
                </button>
              </div>



            </div>


          </div>


        </Column>
      </Row>
    </div>

  )
}   

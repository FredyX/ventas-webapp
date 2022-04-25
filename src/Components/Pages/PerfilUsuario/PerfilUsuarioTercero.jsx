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
import Footer from "../../Footer/Footer";
import SvgIcon from '@mui/material/SvgIcon';

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
      (async () => {
      const { value: accept } = await 
      Swal.fire({
          title: 'Motivo de la denuncia',
  
          html: 
          '<input type="checkbox" id="razon1"/> Razón 1 <p/>' +
         
          '<input type="checkbox" id="razon2"/> Razón 2 <p/>' +
       
          '<input type="checkbox" id="razon3"/> Razón 3 <p/>' +
        
          '<input type="checkbox" id="razon4"/> Razón 4 <p/>', 

          confirmButtonText: 'confirmar',
          confirmButtonColor: '#12b700',
          focusConfirm: false,
          preConfirm: () => {
            var razon1 = Swal.getPopup().querySelector('#razon1').checked
            var razon2 = Swal.getPopup().querySelector('#razon2').checked
            var razon3 = Swal.getPopup().querySelector('#razon3').checked
            var razon4 = Swal.getPopup().querySelector('#razon4').checked
       
          }
        }).then((accept) => {
          Swal.fire(
            {
            title: 'Denuncia realizada',
            icon: 'success',
            confirmButtonColor: '#12b700',
            confirmButtonText: 'Listo'
          })
        
        })
      })()



      } else if (
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

  const CalificarUsuario = (async () => {
    const { value: CalificarUsuario } = await Swal.fire({
      title: 'Selecciona la puntuación',
      showCancelButton: true,
      confirmButtonText: 'Calificar',
      confirmButtonColor: '#12b700',
      cancelButtonText: 'Cancelar',
      icon: 'question',
      input: 'range',
      inputAttributes: {
        min: 1,
        max: 10,
        step: 1
      },
      inputValue: 6
    })
if (CalificarUsuario) {
  Swal.fire(
    {
    title: 'Usuario Calificado',
    icon: 'success',
    confirmButtonColor: '#12b700',
    confirmButtonText: 'Listo'
  })
}
  }
)


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

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <main>
       <div className={styles.navbar_container}>
        <nav>
          {/* LOGO */}
          <div className={styles.brand_logob}>
            <Link to="/">SWAPPER</Link>
          </div>
        </nav>
        <ColoredLine color="black" />

        <Link to={"/"}>
        <button type="button2" className="btnHOMEperfil" >
        <div className="regresar">
        <HomeIcon fontSize="medium" sx={{ color: green[500] }} /> Inicio
        </div>
        </button>
        </Link>
        </div>
        <div className="titulo1">Perfil de Usuario</div>

        <Row className="ro">
        <Column className="col">

<div className="basecontainer2" >
  

</div>
</Column>
        <Column className="col">
         
           
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
                  <p className="departamento">Ubicación: {departamento}</p>
                </div>
               
                <div className="detalleperfil" >
                <p className="score">Puntuación: {score}</p>
                </div>
          
               
              </div>
          
     
          </div>
        </Column>
      
        <Column className="col">
          <div className="basecontainer5">
            <div className="formbotons3" >
              <div className="formbotons" >
                  <button type="button" className="btn7"  onClick={CalificarUsuario}>
                    Calificar
                  </button>
              </div>
            
              <div className="formbotons" >
                <button type="button" className="btn6" onClick={MensajeDenuncia}>
                  Denunciar
                </button>
              </div>
        

            </div>

          </div>

        </Column>
        <Column className="col">
          <div className="basecontainer2" >
          </div>
          </Column>
      </Row>
      <Footer />

    </main>

  )
}   

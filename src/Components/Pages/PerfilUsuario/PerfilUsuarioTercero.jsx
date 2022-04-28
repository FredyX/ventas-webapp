import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import "./PerfilUsuario.scss";
import { useSearchParams } from "react-router-dom";
import userDataService from "../../../services/users.service";
import Navbar from "../../Navbar/Navbar"
import Swal from 'sweetalert2';
import Footer from "../../Footer/Footer";
import SvgIcon from '@mui/material/SvgIcon';

import complaintsService from "../../../services/complaints.service";

import AuthService from "../../../services/auth.service";

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
          const { value: text } = await

            Swal.fire(
              {
                input: 'textarea',
                inputLabel: 'Descripción',
                inputPlaceholder: 'Escribe una descripción aqui...',
                inputAttributes: {
                  'aria-label': 'Escribe una descripción aqui'
                },
                showCancelButton: true,
                confirmButtonColor: '#12b700',
                confirmButtonText: 'Listo'
              })

          if (text) {
            const data = {
              complaint_description: text,
              reason_id: 1,
              creator_user_id: idLog,
              reported_user_id: idUser,
              admin_user_id: 9
            }
            complaintsService.add(data);
            Swal.fire({
              title: 'Usuario denunciado',
              icon: 'success',
              confirmButtonColor: '#12b700',
              confirmButtonText: 'Listo'
            }

            )
          }
        })()

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: 'Denuncia Cancelada',
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [idUser, setIdUser] = useState('');
  const [idLog, setIdLog] = useState('');
  useEffect(() => {
    UsersApi();
  }, [])


  const UsersApi = async () => {
    let id = searchParams.get('id');
    setIdUser(id);
    setIdLog(AuthService.getCurrentUser().user.user_id);
    const response = await userDataService.getToProfile(id);
    if (response.status === 200) {
      const { first_name, last_name, score } = response.data;

      setFirst_Name(first_name)
      setLast_Name(last_name);
      setScore(score);
    }
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
      <Navbar/>
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
                <p className="score">Puntuación: {score}</p>
              </div>


            </div>


          </div>
        </Column>

        <Column className="col">
          <div className="basecontainer5">
            <div className="formbotons3" >
              <div className="formbotons" >
                <button type="button" className="btn7" onClick={CalificarUsuario}>
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

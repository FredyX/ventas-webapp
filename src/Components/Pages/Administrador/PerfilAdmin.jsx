import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import userDataService from "../../../services/users.service";
import departmentsService from "../../../services/departments.service";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar"
import { NavLink, Link } from "react-router-dom";
import styles from "../../Navbar/Navbar.module.scss";
import Swal from 'sweetalert2';
import AuthService from "../../../services/auth.service";
import Footer from "../../Footer/Footer";
import SvgIcon from '@mui/material/SvgIcon';
import { green } from '@mui/material/colors';
import "./PerfilAdmin.scss";

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



export const PerfilAdmin = () => {
  const navigate = useNavigate();

  const MensajeEliminar = (e) => {
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar el perfil?',
      text: "Si no estas seguro, click en cancelar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#12b700',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        userDataService.delete(id);
        AuthService.logout();
        Swal.fire({
          title: 'Eliminado',
          text: "Tu perfil ha sido eliminado!",
          icon: 'success',
          confirmButtonColor: '#12b700',
          confirmButtonText: 'Listo'
        });
        navigate("/");
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


  const [id, setId] = useState(0);
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [score, setScore] = useState('');
  const [is_company, setIs_Company] = useState(' ');
  const [departamento, setDepartamento] = useState(' ');

  useEffect(() => {
    UsersApi();
  }, [])


  const UsersApi = async () => {
    const idLogged = AuthService.getCurrentUser().user.user_id;
    setId(idLogged);
    const response = await userDataService.getProfileModificate(idLogged)
    const user = response.data;
    setFirst_Name(user.first_name)
    setLast_Name(user.last_name);
    setScore(user.score);
    if (user.is_company === true) {
      setIs_Company('Cuenta empresarial')
    } else {
      setIs_Company('Cuenta personal')
    }

    const response2 = await departmentsService.get(user.department_id);
    const departamento = response2.data;
    setDepartamento(departamento.department_name);
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
      <Navbar />

      <div className="titulo1">Mi perfil</div>

      <Row className="ro">

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
                <Link to={"/productosusuario/?page=1"}>
                  <button type="button" className="btn7">
                    Mis productos
                  </button>
                </Link>
              </div>
              <div className="formbotons" >
                <Link to={"/perfilusuario/suscripcion/"}>
                  <button type="button" className="btn7">
                    Suscripciones
                  </button>
                </Link>

              </div>
              <div className="formbotons" >


                <button type="button" className="btn6" onClick={MensajeEliminar}>
                  Eliminar perfil
                </button>

              </div>

            </div>

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
                <p className="is_company">{is_company}</p>
              </div>

              <div className="detalleperfil" >
                <p className="departamento">Ubicación: {departamento}</p>
              </div>

              <div className="detalleperfil" >
                <p className="score">Puntuación: {score}</p>
              </div>


              <div className="formbotons2">
                <Link to={"/modificarusuario"}>
                  <button type="button" className="btn3">
                    Configurar perfil
                  </button>
                </Link>
              </div>

            </div>


          </div>
        </Column>

        <Column className="col">
          <div className="basecontainer5">
            <div className="formbotons3" >
              <div className="formbotons11" >

                <Link to={"/perfiladmin/reportes"}>
                  <button type="button" className="btn77">
                    Reportes
                  </button>
                </Link>
              </div>
              <div className="formbotons11" >
                <Link to={""}>
                  <button type="button" className="btn77">
                    Denuncias
                  </button>
                </Link>
              </div>
              <div className="formbotons11" >
                <Link to={"/Modificarcategorias"}>
                  <button type="button" className="btn77">
                    Categorías
                  </button>
                </Link>
              </div>
            </div>

          </div>

        </Column>

      </Row>
      <Footer />
    </main>

  )
}   

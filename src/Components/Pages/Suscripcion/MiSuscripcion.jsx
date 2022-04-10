import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar"
import { NavLink, Link } from "react-router-dom";
import { green } from '@mui/material/colors';
import styles from "../../Navbar/Navbar.module.scss";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Footer from "../../Footer/Footer";
import  "./Suscripciones.scss";
import { useForm } from '../../../hooks/useFormProducts';
import productDataService from "../../../services/product.service";
import { validateFormProducts } from "../../../helpers/validateForm";
import { SuscripcionN } from "./SuscripcionN";
import userDataService from "../../../services/users.service";
import departmentsService from "../../../services/departments.service";
import { useNavigate } from 'react-router-dom';
import AuthService from "../../../services/auth.service";
import Swal from 'sweetalert2';

export const MiSuscripcion = () => {

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
            height: 3,
            marginTop: 15,
            marginLeft: 20,
            marginRight: 20,
          }}
        />
      );
    
    
      const style = {
        fontWeight: "bold",
        color: "#dc3545"
      };

      
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
     
        Swal.fire({
          title: 'Eliminado',
          text: "Tu perfil ha sido eliminado!",
          icon: 'success',
          confirmButtonColor: '#12b700',
          confirmButtonText: 'Listo'
        });
        
      }
    })
  }

    

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
            </div>

            <Link to={"/perfilusuario/"}>
                <button type="button2" className="btnregresarAGG" >
                <div className="regresar">
                <KeyboardBackspaceRoundedIcon fontSize="medium" sx={{ color: green[500] }} /> Regresar
                </div>
                </button>
            </Link>

        <div className="basecontainerMisSus" > 
       
  
        <div className="formMisSus" >
        <div className="MisSus_title">Mi Suscripción</div>  
        <styleColums>
      <ul>
        <li>
              
        <div className="formdatos" >
          <div className="formdatos" >
            <p className="first_name">Nombre: {first_name}</p>
          </div>

          <div className="formdatos" >
            <p className="last_name">Apellido: {last_name}</p>
          </div>

          <div className="formdatos" >
            <p className="is_company">{is_company}</p>
          </div>

          <div className="formdatos" >
            <p className="departamento">Ubicación: {departamento}</p>
          </div>
          </div>
        
        </li>
      </ul>

      <ul >
        <li>
        <div className="formdatos" >
          <div className="formdatos" >
            <p className="first_name">Categorías:</p>
          </div>

          <div className="formdatos" >
            <p className="last_name">Día para recibir correo:</p>
          </div>

          <div className="formdatos" >
            <p className="is_company">Departamento: </p>
          </div>

          <div className="formdatos" >
            <p className="departamento">Puntuación mínima del vendedor:</p>
          </div>

          <div className="formdatos" >
            <p className="departamento">Prioridad: </p>
          </div>

          </div>
        </li>
      </ul>

      <ul >
        <li>
        <div className="formSP">
                  <Link to={"/perfilusuario/Suscripcion/SuscripcionN"}>
                    <button type="button" className="btnEdS">
                      Editar suscripción
                    </button>
                  </Link>
                  </div>
                  <div className="formSP">
                  <button type="button" className="btnES" onClick={MensajeEliminar}>
                      Eliminar suscripción
                    </button>
                  </div>
                  
             
        </li>
      </ul>
    </styleColums>
    </div>
    </div>
    <Footer/>
  
    </main>
    )
}



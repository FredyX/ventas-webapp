import React, { useEffect, useState } from "react";
//import { useSearchParams } from "react-router-dom";
import "./ModificarUsuario.scss";
import userDataService from "../../services/users.service";
import departmentService from "../../services/departments.service";
<<<<<<< Updated upstream
import { useForm } from '../../hooks/useFormProducts';
import { validateForm } from "../../helpers/validateForm";
=======
import AuthService from "../../services/auth.service";
import { useForm } from '../../hooks/useFormModificarUsuario';
import { validateFormModificate } from "../../helpers/validateForm";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
>>>>>>> Stashed changes


  export const ModificarUsuario = (props) => {

    const {
        stateForm,
        errors,
        handleInputChange,
        handleBlur,
        handleSubmit,
        handleClick
          } = useForm({
        first_name: '',
        last_name : '',
        user_email: '',
<<<<<<< Updated upstream
        department_id : ''
        
      }, validateForm, userDataService);
=======
        department_id :'',
      }, validateFormModificate, userDataService);
>>>>>>> Stashed changes
    
    //const [searchParams, setSearchParams] = useSearchParams();
    const [firstNameus, setFirstName] = useState(' ');
    const [lastNameus, setLastName] = useState(' ');
    const [emailus, setEmail] =  useState(' ');
    const [departamentous, setDepartamento] = useState(' ');


 
    useEffect(() => {
        getDatos();
    }, [])

    //let id = searchParams.get('id');
    const getDatos  = async () => {

        const response = await userDataService.get(27);
        const departaments = await departmentService.get(response.data.department_id);
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setDepartamento(departaments.data.department_name);
        setEmail(response.data.user_email);
    } 

    return(
        <div>
             <div className="ro">
                <div className="col"> 
                    <div className="basecontainer4" >
                        <div className="basecontainer1">
                            <div className="imageproductform" >
                                <img src="C:\Users\Jonathan\Desktop\Probando.jpg"  className="image"  />
                            </div>
                        </div>
                    </div>
                    <div className="basecontainer2" >
                            <div className="detallevendedorform2" >
                                <div className="form-group" >
                                    <p className="Titulo">Datos Actuales</p>
                                    <p className="Datos">Nombre: {firstNameus}</p>
                                    <p className="Datos">Apellido: {lastNameus} </p>
                                    <p className="Datos">Correo: {emailus}</p>
                                    <p className="Datos">Departamento:  {departamentous}</p>
                                </div>
                            </div>
                    <div className="basecontainer3">    
                    </div>
                            
                    </div>
                </div>
                <div className="col">
                    <div className="basecontainer2" >
                        <div className="basecontainer2">
                            <div className="detallevendedorform2" >
                                <div className="form-group" >
                                        <input 
                                            type="text" 
                                            name = "firstname" 
                                            value = {stateForm.first_name}
                                            onChange = {handleInputChange}
                                            onBlur={handleBlur}
                                            placeholder="Nuevo Nombre" 
                                            className="info"
                                        />
                                    
                                        <input 
                                            type="text" 
                                            name = "lastname" 
                                            value = {stateForm.last_name}
                                            onChange = {handleInputChange} 
                                            onBlur={handleBlur}
                                            placeholder="Nuevo Apellido" 
                                            className="info"
                                        />
                                
                                        <input 
                                            type="text" 
                                            name = "email" 
                                            value = {stateForm.user_email}
                                            onChange = {handleInputChange} 
                                            onBlur={handleBlur}
                                            placeholder="Nuevo Correo" 
                                            className="info"
                                        />
                                    
                                        <div className="caja">
                                            <select name="department_id"  value = {stateForm.department_id} onChange = {handleInputChange} >
                                                <option >Departamento</option>
                                                <option value={1}>Atlántida</option>
                                                <option value={2}>Choluteca</option>
                                                <option value={3}>Colón</option>
                                                <option value={4}>Comayagua</option>
                                                <option value={5}>Copán</option>
                                                <option value={6}>Cortés</option>
                                                <option value={7}>El Paraíso</option>
                                                <option value={8}>Francisco Morazán</option>
                                                <option value={9}>Gracias a Dios</option>
                                                <option value={10}>Intibucá</option>
                                                <option value={11}>Islas de la Bahía</option>
                                                <option value={12}>La Paz</option>
                                                <option value={13}>Lempira</option>
                                                <option value={14}>Ocotepeque</option>
                                                <option value={15}>Olancho</option>
                                                <option value={16}>Santa Bárbara</option>
                                                <option value={17}>Valle</option>
                                                <option value={18}>Yoro </option>
                                            </select>
                                        </div>
                                </div>
                                <div className="footer">
                                    <button type="button" className="btn" onClick={handleSubmit}>
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        <div className="basecontainer3">
                            
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
  }
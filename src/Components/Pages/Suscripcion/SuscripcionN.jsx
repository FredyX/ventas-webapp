import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar"
import { NavLink, Link } from "react-router-dom";
import { green } from '@mui/material/colors';
import styles from "../../Navbar/Navbar.module.scss";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Footer from "../../Footer/Footer";
import  "./Suscripciones.scss";
import PinnedSubheaderList from '../../AgregarProducto/checkboxlist';
import { useForm } from '../../../hooks/useForm';
import { validateFormProducts } from "../../../helpers/validateForm";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import suscriptionsDataService from "../../../services/suscriptions.service";
import AuthService from "../../../services/auth.service";

export const SuscripcionN = () => {    
    const [disable, setDisable] = useState(false);
    const [dia, setDia] = useState(null);
    const [puntuacion, setPuntacion] = useState(1);
    let re = new RegExp('"user_id":[0-9]{1,}');
	  let cat = localStorage.getItem('user');
    let arreglo = re.exec(cat);
    const user_id = arreglo[0].slice(-1);
    console.log(user_id);
  const {                    
      handleSelect,
      handleClickRadioButton,
      setRadio,
      setSelect,
      setCheckBox,      
      stateCheckBox,
      stateSelect,
      stateRadio,                 
      } = useForm(validateFormProducts, suscriptionsDataService);
      
      useEffect(() => {
        SuscripcionApi();
      }, []);

      const SuscripcionApi = async () => {
        const idLogged = AuthService.getCurrentUser().user.user_id;
        const datos = await suscriptionsDataService.getSubId(idLogged);        
        const {data} = datos;
        if(data){          
          setRadio(data.order_prior);
          setSelect(data.department_id);
          setCheckBox(data.categorie_id);
          setDia(data.preferred_day);
          setPuntacion(data.min_seller_score);
        }
      }
      const handleChangeDia = ({target}) => {
        setDia(target.value);
      }

      const handleChangePuntuacion = ({target}) => {
        setPuntacion(target.value);
      }
      const handledSubmit = async (e)=>{
        e.preventDefault();
        const data = {
          user_id,
          department_id:stateSelect,
          order_prior: stateRadio,
          min_seller_score: puntuacion,
          preferred_day: dia
        }
        const idLogged = AuthService.getCurrentUser().user.user_id;
        const datos = await suscriptionsDataService.getSubId(idLogged);        
        const {data:dat} = datos;
        console.log(dat);
        if(dat){
          dat.categorie_id = 
          JSON.stringify(dat.categorie_id) === JSON.stringify(stateCheckBox)?
            dat.categorie_id:stateCheckBox;
          dat.department_id = stateSelect;
          dat.order_prior = stateRadio;
          dat.min_seller_score = puntuacion;
          dat.preferred_day = dia;            
          data.id = dat.id;
          console.log(dat.id);
          await suscriptionsDataService.updateSuscrip(dat);
          await suscriptionsDataService.updateSuscripCategories({
            suscription_id:dat.id,
            categorie_id: stateCheckBox
          });          
          alert('La suscripción fue modificada');
        }else{
          setDisable(true);               
          const {data:suscription} = await suscriptionsDataService.addSuscrip(data);                
          const {data:status}  = await suscriptionsDataService.addSuscripCategories({          
            suscription_id: suscription.id,
            categorie_id: stateCheckBox
          });
          if(status.status==="Ok"){
            alert('La suscripción se Creo correctamente');
          }else{
            alert('Error en al intentar suscribirse');
            setDisable(true);
          }
        }                        
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
    
    
      const style = {
        fontWeight: "bold",
        color: "#dc3545"
      };
   
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

            <Link to={"/perfilusuario/suscripcion/"}>
                <button type="button2" className="btnregresarAGG" >
                <div className="regresar">
                <KeyboardBackspaceRoundedIcon fontSize="medium" sx={{ color: green[500] }} /> Regresar
                </div>
                </button>
            </Link>
     
        <div className="basecontainerSus" >
                <div className="formSus" >
                <div className="Sus_title">Suscripción</div>
                <styleColums>
      <ul>
        <li>
                <div className="formS" >

                <span>Seleccione una o más categoría</span>
                    <PinnedSubheaderList passCategoriesChange={setCheckBox} />

                    </div>
                    <div className="formS" >
                    <div className="caja">
                      <select name="diapreferencia" onChange={handleChangeDia}>
                        <option >Seleccionar día para recibir correo</option>
                        <option value={"L"}>Lunes</option>
                        <option value={"M"}>Martes</option>
                        <option value={"X"}>Miércoles</option>
                        <option value={"J"}>Jueves</option>
                        <option value={"V"}>Viernes</option>
                        <option value={"S"}>Sábado</option>
                        <option value={"D"}>Domingo</option>
                      </select>
                    </div>
                    </div>
                    <div className="formS" >
                    <div className="caja">
                      <select name="department_id" onChange={handleSelect}>
                        <option >Seleccione un departamento</option>
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
                    <div className="formS" >
                    <div className="caja">
                      <select name="department_id" onChange={handleChangePuntuacion}>
                        <option >Puntuación mínima del vendedor</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                    </div>
                    </div>
                    </li>
      </ul>
      <ul >
        <li>
                    <div className="formSPri">Seleccione la prioridad</div>
                    <div className="formSPr" >
                    <FormControl>                        
                        <RadioGroup
                            column
                            aria-labelledby="prioridad"
                            name="prioridadCorreo"
                            onChange={handleClickRadioButton}
                        >
                            <FormControlLabel  value="P" control={<Radio size="small" />} label="Precio del producto" />
                            <FormControlLabel value="V" control={<Radio size="small"/>} label="Puntuación del vendedor" />
                            <FormControlLabel  value="A" control={<Radio size="small"/>} label="Antiguedadd de la publicación" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div className="formSB" >
                    <button 
                      type="button"
                      className="btn"
                      disabled={disable}
                      onClick={handledSubmit}                      
                    >
                        Confirmar
                    </button>
                      <div>
                      <Link to={"/perfilusuario/suscripcion/"}>
                      <button type="button" className="btn2">
                        Cancelar
                      </button>
                    </Link>
                      </div>                     
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



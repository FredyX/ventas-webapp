import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

export const useForm = (validateFormProducts, service) => {
	
	const [stateInputs, setInputs] = useState({});
	const [stateCheckBox, setCheckBox] = useState([]);
    const [stateSelect, setSelect] = useState(0);
    const [stateRadio, setRadio] = useState(0)
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

    /*
    * Al ocurrir un cambio en los inputs , estos nuevo cambios
    * son establecidos en el estado stateInputs
    */
	const handleInputChange = ({ target }) => {
		setInputs({
			...stateInputs,			
		});
	}

	const handleCheckBToggle = (value) => () => {
        //si encuentra la existencia del elemento en el arreglo
        //devuelve la posición en la que esta dicho elemento
        const currentIndex = stateCheckBox.indexOf(value);
        const newChecked = [...stateCheckBox];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setCheckBox(newChecked);        
    };
    
    const handleSelect = ({target}) => {
        setSelect(target.value);        
    }

    //El value tiene que coincidir con el número que pongamos en
    //número que pongamos en el condicional de la propiedad checked
    const handleClickRadioButton = ({target}) => {
        setRadio(target.value);
    }
	/*
    Implementar validaciones
	const handleBlur = (e) => {
		handleInputChange(e);
		setErrors(validateFormProducts(stateForm));
	}
    */
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

	function isObjectEmpty(obj) {
		for (let prop in obj) {
			if (obj.hasOwnProperty(prop))
				return false;
		}
		return true;
	}

	return {		
        stateInputs,
        setInputs,
	    stateCheckBox,
        setCheckBox,
        stateSelect,
        setSelect,
        stateRadio, 
        setRadio,
	    errors,
        setErrors,
        handleInputChange,
        handleCheckBToggle,
        handleSelect,
        handleClickRadioButton,
        formatear
	};
}
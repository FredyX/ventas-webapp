import { useState } from 'react';
import {useEffect} from 'react';

export const useFormCambio = (inicial, token, user_email, validateForm, userDataService) => {
    const URL = 'localhost'
    const [stateForm, setForm] = useState(inicial);
    const [errors, setErrors] = useState({});

    const handleInputChange = ({ target }) => {
		setForm({
			...stateForm,
			[target.name]: target.type === 'checkbox' ? target.checked : target.value
		});
	}

    const handleBlur = (e) => {
		handleInputChange(e);
		setErrors(validateForm(stateForm));
	}

    const handleSubmit = ({target}) => {
        if(isObjectEmpty(errors)){
           /* 
            let formData = new FormData();
            formData.append('user_email',user_email);
            formData.append('user_password', stateForm.user_password);
			formData.append('token', token);
            fetch(`http://localhost:3001/api/users/reset_password`,{
                method: 'put',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-token': `${token}`
                },
                body: formData
            })
                .then( res => alert('Contraseña modificada con exito'))
                .catch( err => alert(`error en la petición ${err}`));
        }else{
            alert('Los campos estan incompletos');
        }*/
        const {user_password} = stateForm;
        userDataService.resetPassword(
            {
                user_password,
                user_email                
            },token);

        }
    }
    function isObjectEmpty(obj) {
		for (let prop in obj) {
			if (obj.hasOwnProperty(prop))
				return false;
		}
		return true;
	}

    return {
        handleInputChange,
        handleSubmit,
        handleBlur,
        errors              
    }
}

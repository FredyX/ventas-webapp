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

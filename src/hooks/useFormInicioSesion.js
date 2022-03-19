import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useForm = (form = {},validateFormLogin, AuthService) => {
	
	const [stateForm, setForm] = useState(form);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleInputChange = ({ target }) => {
		setForm({
			...stateForm,
			[target.name]: target.type === 'checkbox' ? target.checked : target.value
		});
	}

	const handleBlur = (e) => {
		handleInputChange(e);
		setErrors(validateFormLogin(stateForm));
	}


	const handleSubmit = (e) => {
		if (isObjectEmpty(errors)) {
			let data = {
				...stateForm
			}

			AuthService.login(data)
				.then(() => {
					setForm({
						user_email: '',
						user_password: ''
					});
					navigate("/agregarproducto");
				})
				.catch(e => {
					console.log(e);
				});
		} else {
			alert('Error los campos tienen que ser completados');

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
		stateForm,
		errors,
		handleInputChange,
		handleSubmit,
		handleBlur
	};
}
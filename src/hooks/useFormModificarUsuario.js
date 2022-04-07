import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

export const useForm = (form = {},validateFormModificate, userDataService) => {
	
	const [stateForm, setForm] = useState(form);
	const [errors, setErrors] = useState({});
	const [stateCheck, setCheck] = useState(false);
	const navigate = useNavigate();

	const handleInputChange = ({ target }) => {
		setForm({
			...stateForm,
			[target.name]: target.type === 'checkbox' ? target.checked : target.value
		});
	}

	const handleBlur = (e) => {
		handleInputChange(e);
<<<<<<< Updated upstream
		setErrors(validateForm(stateForm));
	}

	const handleClick = ({ target }) => {
		setCheck(target.checked);
=======
		setErrors(validateFormModificate(stateForm));
>>>>>>> Stashed changes
	}

	const handleSubmit = (e) => {
		if (isObjectEmpty(errors) && stateCheck) {
			let data = {
				...stateForm,
				is_company: false
			}

			userDataService.register(data)
				.then(response => {
					setForm({
						first_name: '',
						last_name: '',
						user_email: '',
<<<<<<< Updated upstream
						user_password: '',
						user_password2: '',
=======
>>>>>>> Stashed changes
						department_id: '',
					});
					setCheck(false);
					navigate("/iniciosesion");
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
		handleBlur,
		handleSubmit,
		handleClick,
		stateCheck
	};
}
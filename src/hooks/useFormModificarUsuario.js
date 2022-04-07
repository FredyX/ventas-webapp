import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import { validateFormModificate } from '../helpers/validateForm';

export const useForm = (form = {},validateFormModificate, userDataService) => {
	const [stateForm, setForm] = useState(form);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleInputChange = ({ target }) => {
		setForm({
			...stateForm,
			[target.name]: target.value
		});
	}

	const handleBlur = (e) => {
		handleInputChange(e);
		setErrors(validateFormModificate(stateForm));
	}

	const handleSubmit = (e) => {
		if (isObjectEmpty(errors)) {
			let data = {
				...stateForm
			}
			const id =  AuthService.getCurrentUser().user.user_id

			userDataService.update(id,data)
				.then(response => {
					setForm({
						first_name: '',
						last_name: '',
						user_email: '',
						department_id: ''
					});
					navigate(0);
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
		handleSubmit
	};
}
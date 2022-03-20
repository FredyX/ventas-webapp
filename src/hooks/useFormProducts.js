import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const useFormProducts = (form = {}, validateForm, productDataService) => {
	
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
		setErrors(validateForm(stateForm));
	}

	const handleClick = ({ target }) => {
		setCheck(target.checked);
	}

	const handleSubmit = (e) => {
		if (isObjectEmpty(errors) && stateCheck) {
			let data = {
				...stateForm,
				is_company: false
			}

			productDataService.add(data)
				.then(response => {
					setForm({
						title: '',
						price: '',
						category: '',
						state: '',
						description: '',
						imagen: '',
                        
					});
					setCheck(false);
					navigate("/");
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
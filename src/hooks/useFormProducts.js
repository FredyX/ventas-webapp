import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

export const useForm = (form = {}, validateFormProducts, productDataService) => {
	
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

	const handleCategories = (categories) => {
		console.log(categories);
		setForm({
			...stateForm,
			categories
		});
	}
	const handleFile = (file) => {
		setForm({
			...stateForm,
			file
		});
	}
	const handleBlur = (e) => {
		handleInputChange(e);
		setErrors(validateFormProducts(stateForm));
	}

	const handleClick = ({ target }) => {
		setCheck(target.checked);
	}

	const handleSubmit = (e) => {
		if (isObjectEmpty(errors)) {

			let data = new FormData();
			data.append('product_name', stateForm.product_name);
			data.append('product_description', stateForm.product_description);
			data.append('price', stateForm.price);
			data.append('department_id', stateForm.department_id);
			data.append('state', stateForm.state);
			data.append('user_seller_id', AuthService.getCurrentUser().user.user_id);
			data.append('ext', stateForm.file.name.split('.')[1]);
			data.append('date_added', new Date());
			data.append('categories', stateForm.categories);
			data.append('file', stateForm.file);

			productDataService.add(data)
				.then(response => {
					setForm({
						product_name: '',
						price: '',
						categories: '',
						state: '',
						product_description: '',
						file: '',
                        department_id: '',
					});
					setCheck(false);
					navigate(`/detalles/?id=${response.data.product.id}`);
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
		handleCategories,
		handleFile,
		stateCheck
	};
}
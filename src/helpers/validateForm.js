import { regularExp } from './regularExp';

const validateForm = (stateForm, check = null) => {

  let errors = {};

  if (!stateForm.first_name) {
    errors.first_name = 'El campo del nombre es obligatorio';
  }
  if (!stateForm.last_name) {
    errors.last_name = 'El campo apellido es obligatorio';
  }
  if (!stateForm.user_email) {
    errors.user_email = 'El email es obligatorio';
  } else {
    const { email } = regularExp;
    let arrayMatch = email.exec(stateForm.user_email.trim());
    if (!arrayMatch) {
      errors.user_email = 'El correo electrónico no es válido';
    }
  }
  if (!stateForm.user_password) {
    errors.user_password = 'La contraseña es obligatoria';
  } else {
    const { password } = regularExp;
    let arrayMatch = password.exec(stateForm.user_password);
    if (!arrayMatch) {
      errors.user_password = 'No se cumplen los requisitos de seguridad';
    } else {
      if (stateForm.user_password !== stateForm.user_password2)
        errors.user_password2 = 'No coinciden las contraseñas';
    }
  }

  if (!(check === null)) { 
    if (!check) {
      errors.terms = 'Necesita aceptar los terminos y condiciones';
    }
  }

  return errors;
}

const validateFormLogin = (stateForm) => {
  let errors = {};
  if (!stateForm.user_email) {
    errors.user_email = 'El email es obligatorio';
  } 
  if (!stateForm.user_password) {
    errors.user_password = 'La contraseña es obligatoria';
  } 
  return errors;
}



const validateFormProducts = (stateForm, check = null) => {

  let errors = {};
  
  if (!stateForm.product_name) {
    errors.product_name = 'El campo del título es obligatorio';
  }
  if (!stateForm.price) {
    errors.price = 'El campo precio es obligatorio';
  }
  if (!stateForm.product_description) {
    errors.product_description = 'El campo descripción es obligatorio';
  }

  // if (!(check === null)) { 
  //   if (!check) {
  //     errors.categories = 'Necesita seleccionar al menos una categoría';
  //   }
  // }
  return errors;
}
const validateFormCambioPassword = (stateForm) => {
  let errors ={};
  if (!stateForm.user_password) {
    errors.user_password = 'El campo del título es obligatorio';
  }else{
    const { password } = regularExp;
    let arrayMatch = password.exec(stateForm.user_password);
    if (!arrayMatch) {
      errors.user_password = 'No se cumplen los requisitos de seguridad';
    } else {
      if (stateForm.user_password !== stateForm.user_password2)
        errors.user_password2 = 'No coinciden las contraseñas';
    }
  }
  
}  


export { validateFormProducts ,validateForm, validateFormLogin, validateFormCambioPassword };

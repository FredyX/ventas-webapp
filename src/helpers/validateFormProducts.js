import { regularExp } from './regularExp';

const validateFormProducts = (stateForm, check = null) => {

  let errors = {};
  
  if (!stateForm.title) {
    errors.title = 'El campo del título es obligatorio';
  }
  if (!stateForm.price) {
    errors.price = 'El campo precio es obligatorio';
  }
  if (!stateForm.description) {
    errors.description = 'El campo descripción es obligatorio';
  }

  if (!(check === null)) { 
    if (!check) {
      errors.terms = 'Necesita seleccionar al menos una categoría';
    }
  }

  return errors;
}


export { validateFormProducts };

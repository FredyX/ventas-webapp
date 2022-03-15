 import {regularExp} from './regularExp';

 export const validateForm = (stateForm, check = null) => {    
    
    let errors = {};
    
    if (!stateForm.first_name){
      errors.first_name = 'El campo del nombre es obligatorio';
    }
    if(!stateForm.last_name){
      errors.last_name = 'El campo apellido es obligatorio';
    }
    if(!stateForm.user_email){
      errors.user_email = 'El email es obligatorio';
    }else{
      const {email} = regularExp;
      let arrayMatch = email.exec(stateForm.user_email.trim());
      console.log(arrayMatch);
      if(!arrayMatch){
        errors.user_email = 'El correo electrónico no es válido';        
      }      
    }
    if(!stateForm.user_password){
      errors.user_password = 'La contraseña es obligatoria';
    }else {
      const {password} = regularExp;
      let arrayMatch = password.exec(stateForm.user_password);
      if(!arrayMatch){
        errors.user_password = 'No se cumplen los requisitos de seguridad';
      }else{
        if(stateForm.user_password != stateForm.user_password2)
          errors.user_password2 = 'No coinciden las contraseñas';
      }
    }

    if(!(check === null)){
      if(!check){
        errors.terms = 'Necesita aceptar los terminos y condiciones';
      }        
    }
    
    return errors;
  }
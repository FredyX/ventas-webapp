
import React from 'react';
import Swal from 'sweetalert2'


function Errormessage2() {

    const registroinvalido2=()=>{
        Swal.fire({
          icon: 'error',
          title: 'Registro Inválido',
          text: 'Ha introducido campos inválidos',
          showConfirmButton: true,
          background: "#F1F1F1",
          confirmButtonText: "Corregir campos",
          confirmButtonfont: "Arsenal",
          confirmButtonColor: "#12B700",
          iconColor: "#12B700",
        })

  
  }

  return (
    <div className="Errormessage2">
      <br />
      <button onClick={()=>registroinvalido2()}>Registro Inválido 2</button>
      </div>
  );
}

export default Errormessage2;

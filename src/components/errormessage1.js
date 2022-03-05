
import React from 'react';
import Swal from 'sweetalert2'


function Errormessage() {

    const registroinvalido=()=>{
        Swal.fire({
          icon: 'error',
          title: 'Registro Inválido',
          text: 'Faltan campos por llenar',
          showConfirmButton: true,
          background: "#F1F1F1",
          confirmButtonText: "Completar campos",
          confirmButtonfont: "Arsenal",
          confirmButtonColor: "#12B700",
          iconColor: "#12B700",
        })

  
  }

  return (
    <div className="Errormessage">
      <br />
      <button onClick={()=>registroinvalido()}>Registro Inválido</button>
      </div>
  );
}

export default Errormessage;


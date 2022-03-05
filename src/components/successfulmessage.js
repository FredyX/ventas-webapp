
import React from 'react';
import Swal from 'sweetalert2'


function Successfulmessage() {

  const registroexitoso=()=>{
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      showConfirmButton: true,
      background: "#F1F1F1",
      confirmButtonText: "Aceptar",
      confirmButtonfont: "Arsenal",
      confirmButtonColor: "#12B700",
      iconColor: "#12B700",
    })
  
  }

  return (
    <div className="Successfulmessage">
      <br />
      <button onClick={()=>registroexitoso()}>Registro Exitoso</button>
      </div>
  );
}

export default Successfulmessage;



// src/components/Scroll.js
// los componentes dentro de él se renderizan con una altura de 70 viewport heighty los convierte en un componente desplazable para el 
// eje y si se desbordan.

import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'70vh', marginBottom:'300px'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;



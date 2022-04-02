
// src/components/Card.js
//El componente de la tarjeta recibirá los detalles de una sola persona y luego los mostrará.

import React from 'react';

function Card({person}) {
  return(
    <div className="tc bg-light-gray dib br3 pa5 ma3 grow bw2 shadow-5 f6 font-family: sans-serif ">
      <img className=" h3 w3 dib font-family: sans-serif " alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} className="image" />
      <div>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
      </div>
    </div>
  );
}

export default Card;

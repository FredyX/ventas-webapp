// src/components/Search.js
// Finalmente llegamos al Searchcomponente, este es el componente más importante desde la perspectiva del artículo. 
//En primer lugar, importamos useStatede react. Luego, importamos los componentes Scrolly SearchList. A continuación, 
// en la Searchfunción, usamos el useStategancho para inicializar el valor de searchField statewith useState("")(una cadena vacía). 
// Después de esto, usamos la filterfunción en la detailslista recibida del padre.

//En esta función de filtro, buscamos dos valores, el nombre de la persona y su correo electrónico y luego los convertimos a 
// minúsculas con la toLowerCasefunción, luego de lo cual usamos la includesfunción para verificar si la barra de búsqueda 
// incluye alguna de las letras en los detalles. Si incluye la consulta especificada, los detalles de la persona específica se 
//envían a filteredPersons.

// src/components/Search.js

import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';


function Search({ details }) {

 

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  }

  return (
    <section className="garamond">
      
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-light-green ma1 tc-ns f6 font-family: sans-serif "
          type = "search" 
          placeholder = "Buscar" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
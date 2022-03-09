import "./App.scss";
import "./Components/Registro/Registro.scss";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Pages/Home/Home";
import {Registro} from "./Components/Registro/Registro";
import {InicioSesion} from "./Components/InicioSesion/InicioSesion";

//semana 1

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/registro/" element= {<Registro />} />  
      <Route path="/iniciosesion/" element= {<InicioSesion />} />  
      <Route path="/" element= {<Home />} /> 
        
      </Routes>
    </div>
  );
} 

export default App;
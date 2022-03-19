import "./App.scss";
import "./Components/Registro/Registro.scss";
import "./Components/Footer/footer.scss";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Pages/Home/Home";
import {CustomForm} from "./Components/Registro/CustomForm";
import {InicioSesion} from "./Components/InicioSesion/InicioSesion";
import {TerminosDeServicio} from "./Components/Pages/ToS/TerminosDeServicio";
import {AgregarProducto} from "./Components/AgregarProducto/AgregarProducto";

//semana 1

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/registro/" element= {<CustomForm />} />  
      <Route path="/iniciosesion/" element= {<InicioSesion />} /> 
      <Route path="/agregarproducto/" element= {<AgregarProducto />} />   
      <Route path="/" element= {<Home />} /> 
      <Route path="/tos/" element= {<TerminosDeServicio />} />
      </Routes>

    </div>
  );
} 

export default App;
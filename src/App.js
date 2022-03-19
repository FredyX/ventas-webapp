import "./App.scss";
import "./Components/Registro/Registro.scss";
import "./Components/Footer/footer.scss";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Pages/Home/Home";
import {Registro} from "./Components/Registro/Registro";
import {InicioSesion} from "./Components/InicioSesion/InicioSesion";
import {TerminosDeServicio} from "./Components/Pages/ToS/TerminosDeServicio";
import {AgregarProducto} from "./Components/AgregarProducto/AgregarProducto";
import {DetallesProducto} from "./Components/Pages/DetallesProducto/DetallesProducto";


//semana 1

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/registro/" element= {<Registro />} />  
      <Route path="/iniciosesion/" element= {<InicioSesion />} /> 
      <Route path="/agregarproducto/" element= {<AgregarProducto />} />   
      <Route path="/" element= {<Home />} /> 
      <Route path="/tos/" element= {<TerminosDeServicio />} />
      <Route path="/detalles/" element= {<DetallesProducto />} />
      </Routes>

    </div>
  );
} 

export default App;
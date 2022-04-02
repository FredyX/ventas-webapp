import "./App.scss";
import "./Components/Registro/Registro.scss";
import "./Components/Footer/footer.scss";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Pages/Home/Home";
import {CustomForm} from "./Components/Registro/CustomForm";
import {InicioSesion} from "./Components/InicioSesion/InicioSesion";
import {TerminosDeServicio} from "./Components/Pages/ToS/TerminosDeServicio";
import {AgregarProducto} from "./Components/AgregarProducto/AgregarProducto";
import {DetallesProducto} from "./Components/Pages/DetallesProducto/DetallesProducto";
import {ModificarUsuario} from "./Components/ModificarUsuario/ModificarUsuario";
import { PerfilUsuario } from "./Components/Pages/PerfilUsuario/PerfilUsuario";
import { PerfilUsuarioTercero } from "./Components/Pages/PerfilUsuario/PerfilUsuarioTercero";
import { RecuperacionCuenta } from "./Components/Pages/RecuperacionCuenta/RecuperacionCuenta";
import { CambioContrasena } from "./Components/Pages/RecuperacionCuenta/CambioContrasena";
import { Busqueda } from "./Components/Pages/Busqueda/Busqueda";


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
      <Route path="/detalles/" element= {<DetallesProducto />} />
      <Route path="/modificarusuario/" element= {<ModificarUsuario />} />
      <Route path="/perfilusuario/" element= {<PerfilUsuario />} />
      <Route path="/perfilusuario/visitante/" element= {<PerfilUsuarioTercero />} />
      <Route path="/iniciosesion/recuperacioncuenta/" element={<RecuperacionCuenta/>} />
      <Route path="/iniciosesion/recuperacioncuenta/cambiocontrasena/" element={<CambioContrasena/>} />
      <Route path="/busqueda/" element= {<Busqueda />} />   
      </Routes>

    </div>
  );
} 

export default App;
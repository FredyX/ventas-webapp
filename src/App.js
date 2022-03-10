import "./App.scss";
import "./Components/Registro/Registro.scss";
import "./Components/Footer/footer.scss";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Pages/Home/Home";
import {Registro} from "./Components/Registro/Registro";
import {InicioSesion} from "./Components/InicioSesion/InicioSesion";
import {TerminosDeServicio} from "./Components/Pages/ToS/TerminosDeServicio";
import {Footer} from "./Components/Footer/Footer";
//semana 1

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/registro/" element= {<Registro />} />  
      <Route path="/iniciosesion/" element= {<InicioSesion />} />  
      <Route path="/" element= {<Home />} /> 
      <Route path="/tos/" element= {<TerminosDeServicio />} />
      </Routes>
      <Footer />
    </div>
  );
} 

export default App;
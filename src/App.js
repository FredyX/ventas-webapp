import "./App.scss";
import "./Components/Registro/Registro.scss";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Pages/Home/Home";
import {Registro} from "./Components/Registro/Registro";


function App() {

  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element= {<Registro />} />  
      <Route path="/" element= {<Home />} /> 
        
      </Routes>
    </div>
  );
} 




export default App;

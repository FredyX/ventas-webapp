import styles from "./Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField } from "@mui/material";

import { BsArrowRight, BsSearch } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

import {useCallback, useState } from "react";
import useClickOutside from "../CustomHooks/ClickOutside";
import authService from "../../services/auth.service";

const user =  authService.getCurrentUser()



const Navbar = ({ BurgerColour, setSearch, handledKeyPress }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchTerm, SetsearchTerm] = useState('')
  const navigate = useNavigate();
  const UsuarioDentr = useCallback(() => navigate('/perfilusuario/', {replace: true}), [navigate]);
  const UsuarioFuer = useCallback(() => navigate('/iniciosesion/', {replace: true}), [navigate]);
  
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink
          to={`/${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    );
  };

  const [isNavOpen, setisNavOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNavOpen(false);
  });

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 3,
        marginTop: 15
      }}
    />
  );

  const handleChange = ({target})=>{
      SetsearchTerm(target.value);
      setSearch(target.value);
  }
 
  function UsuarioDentro(props) {
    return <span onClick={UsuarioDentr} className={styles.login_container} style={{ color: BurgerColour }} >Bienvenido {user.username}!</span>;
  }
  
  function UsuarioFuera(props) {
    return <h1>onClick={UsuarioFuer} className={styles.login_container} style={{ color: BurgerColour }} Iniciar Sesion</h1>;
  }

  function InicioSesion(props) {    
  if (user) {
    return <UsuarioDentro />;
  } else {
    return <UsuarioFuera />;
  }
  }

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <Link to="/">SWAPPER</Link>
        </div>

        {/* NAV-BURGER */}
        <div
          className={styles.mobile_menu}
          style={{ color: BurgerColour }}
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>

        {/* NAV */}
        <ul
          className={`${isNavOpen ? styles.ul_active : undefined} ${
            styles.navbar_ul
          }`}
          ref={domNode}
        >
          <div
            className={styles.mobile_close}
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>
          
          <div className="Buscar" >
          <Box sx={{  width: 300, backgroundColor: 'grey', display: 'flex', alignItems: 'flex-end' }}>
          <Link to={"/busqueda/"} className="link">
        <SearchOutlinedIcon sx={{ color: "green", mr: 1, my: 0.5 }} className= "btnBuscar"/>
        </Link>
        <TextField id="Buscar"  fullWidth label="Buscar" 
          variant="standard"
          color="success" focused
          onChange={handleChange}
          onKeyDown={handledKeyPress}
        />
      </Box>

      {}

      </div>

          <Link to="/iniciosesion/" className={styles.login}>
            <InicioSesion user={false} />
          </Link>
        </ul>



        {/* TEMPORAL ----- Agregar producto */}
        <Link to="/AgregarProducto/" className={styles.login_container}>
        <span style={{ color: BurgerColour }}>Agregar producto</span>
        <BsArrowRight style={{ color: BurgerColour }} />
        </Link>

        {/* Login */}
        
          <span ><InicioSesion user={false} /> <BsArrowRight style={{ color: BurgerColour }} /></span>
      </nav>
      <ColoredLine color="black" />
    </div>
  );
};

Navbar.defaultProps = {
  BurgerColour: "rgb(26, 55, 58)",
};
export default Navbar;
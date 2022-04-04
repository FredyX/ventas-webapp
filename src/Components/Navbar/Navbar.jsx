import styles from "./Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField } from "@mui/material";

import { BsArrowRight, BsSearch } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";
import useClickOutside from "../CustomHooks/ClickOutside";


const Navbar = ({ BurgerColour, setSearch }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchTerm, SetsearchTerm] = useState('')
  
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

  const handleKeypress = ({target}) =>{
    alert('Se busco en la api');
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
          onKeyPress={handleKeypress}
        />
      </Box>

      {}

      </div>

          <Link to="/iniciosesion/" className={styles.login}>
            <span>Iniciar Sesión</span>
          </Link>
        </ul>



        {/* TEMPORAL ----- Agregar producto */}
        <Link to="/AgregarProducto/" className={styles.login_container}>
        <span style={{ color: BurgerColour }}>Agregar producto</span>
        <BsArrowRight style={{ color: BurgerColour }} />
        </Link>

        {/* Login */}
        <Link to="/iniciosesion/" className={styles.login_container}>
          <span style={{ color: BurgerColour }}>Iniciar Sesión</span>
          <BsArrowRight style={{ color: BurgerColour }} />
        </Link>


      </nav>
      <ColoredLine color="black" />
    </div>
  );
};

Navbar.defaultProps = {
  BurgerColour: "rgb(26, 55, 58)",
};
export default Navbar;
import React, { useEffect, useState } from "react";
import "./ModificarCategorias.scss";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import categoriesService from "../../services/categories.service"
import styled from 'styled-components';
import { useForm } from '../../hooks/useFormProducts';
import PinnedSubheaderList from './checkboxlist';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItem, ListItemIcon } from "@mui/material";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import SvgIcon from '@mui/material/SvgIcon';
import { green } from '@mui/material/colors';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: center;
  width: 100%;
  `;

const Row = styled.div`
  display: flex;
  grid-template-columns: 100%;
  grid-gap: 0px;
  background-color: #ffffff; 
  position: center;
  bottom: 0;
  width: 100%;
  `;

export const ModificarCategorias = (props) => {
  const [newCategorie, setNewCategorie] = useState('');
  const [cate, setCate] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getCategorias();
  }, [])

  const {
    setCheckBox,
    stateCheckBox,
    handleCheckBToggle
  } = useForm();

  const handleimput = (e) => {
    setNewCategorie(e.target.value)
  }

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
    
  const getCategorias = async () => {
    const categoria = await categoriesService.getAll();
    console.log(categoria.data);
    let cat = {};
    categoria.data.map(c => {
      cat[c.id] = c.categorie_name;
    })
    setCate(cat);
    console.log(cate)
  }

  const AgregarCategoria = async () => {
    console.log(newCategorie)
    await categoriesService.add(newCategorie);

    navigate(0);
  }


  const MensajeEliminar = (e) => {
    const id = e.target.id;
    console.log(id)
    Swal.fire({
      title: '??Estas seguro que deseas eliminar la categoria?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#12b700',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarla!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        categoriesService.delete(id)
        Swal.fire({
          title: 'Categoria eliminada',
          icon: 'success',
          confirmButtonColor: '#12b700',
          confirmButtonText: 'Listo'
        });

        navigate(0);
      }
    })
  }

  return (
    <main>
      <Navbar></Navbar>
      <Link to={"/"}>
      <button type="button2" className="btnregresarAGG" >
      <div className="regresar">
      <HomeIcon fontSize="medium" sx={{ color: green[500] }} /> Inicio
      </div>
      </button>
      </Link>
      <Link to={"/perfilusuario"}>
      <button type="button2" className="btnregresarAGG" >
      <div className="regresar">
      <KeyboardBackspaceRoundedIcon  fontSize="medium" sx={{ color: green[500] }} />  <a href="javascript:history.back()">  Perfil
      </a>
      </div>
      </button>
      </Link>
      <Row>
        <Column>
          <List className='estilotexto' sx={{
            marginLeft: 1,
            marginRight: 1,
            overflow: 'auto',
            display: 'flex',
            border: 2,
            borderColor: '#00B712',
            borderRadius: 1.5,
            color: '#5a5a5a',
            padding: '0 50px',

          }}
          >
            {
              Object.keys(cate).map(key => {
                let label = cate[key];
                let value = key;
                return (
                  <ListItem key={value}>
                    <ListItemText className="textoList" primary={label}> </ListItemText>
                    <IconButton edge="end" aria-label="delete" onClick={MensajeEliminar}>
                      <DeleteIcon id={value}  />
                    </IconButton>
                  </ListItem>
                )
              })
            }
          </List>
        </Column>

        <Column>

          <input onChange={handleimput} value={newCategorie} type="text" name="agregar" placeholder="Ingrese Nueva Categoria" id="" className="txtAgregar" />
          <button name="agregar" onClick={AgregarCategoria} className="btnAgregar">Agregar</button>

        </Column>
      </Row>




      <Footer></Footer>
    </main>
  )
}
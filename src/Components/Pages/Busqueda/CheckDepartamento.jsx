import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import { borderBottom } from '@mui/system';

import  "./Busqueda.scss";

export default function CheckDepartamento() {
    const [state, setState] = React.useState({
      Atlantida: false,
      Choluteca: false,
      Colon: false,
      Copan: false,
      Cortes: false,
      El_Paraiso: false,
      Francisco_Morazan: false,
      Gracias_a_Dios: false,
      Intibuca: false,
      Islas_de_la_Bahia: false,
      La_Paz: false,
      Lempira: false,
      Ocotepeque: false,
      Olancho: false,
      Santa_Barbara: false,
      Valle: false,
      Yoro: false,
    });
  
    const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };
  
    const { Atlantida,
      Choluteca,
      Colon,
      Copan,
      Cortes,
      El_Paraiso,
      Francisco_Morazan,
      Gracias_a_Dios,
      Intibuca,
      Islas_de_la_Bahia,
      La_Paz,
      Lempira,
      Ocotepeque,
      Olancho,
      Santa_Barbara,
      Valle,
      Yoro } = state;
    const error = [Atlantida,
      Choluteca,
      Colon,
      Copan,
      Cortes,
      El_Paraiso,
      Francisco_Morazan,
      Gracias_a_Dios,
      Intibuca,
      Islas_de_la_Bahia,
      La_Paz,
      Lempira,
      Ocotepeque,
      Olancho,
      Santa_Barbara,
      Valle,
      Yoro].filter((v) => v).length !== 1;
  
    return (
      <List className='estilotexto'
      sx={{
        marginTop: 1,
        width: 'auto',
        heigth: '100%',
        maxWidth: 100,
        bgcolor: 'gris',
        position: 'left',
        overflow: 'auto',
        maxHeight: 200,
        display: 'flex',
        fontSize: 5,
        background: 'white',
        border: 0,
        borderRadius: 1.5,
        color: '#0000000',
        padding: '0 120px',
      }}
    >

      <Box sx={{ display: 'flex' } }>
        <FormControl sx={{ m: 3}} component="fieldset" variant="standard">
         
          <  div className="form-check1">
            <FormControlLabel
              control={
                <Checkbox  checked={Atlantida} onChange={handleChange} name="Atlantida" />
              }
              label="Atlántida"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Choluteca} onChange={handleChange} name="Choluteca" />
              }
              label="Choluteca"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Colon} onChange={handleChange} name="Colon" />
              }
              label="Colón"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Copan} onChange={handleChange} name="Copan"/>
              }
              label="Copán"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Cortes} onChange={handleChange} name="Cortes" />
              }
              label="Cortés"
            />
            <FormControlLabel
              control={
                <Checkbox checked={El_Paraiso} onChange={handleChange} name="El_Paraiso" />
              }
              label="El Paraíso"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Francisco_Morazan} onChange={handleChange} name="Francisco_Morazan"/>
              }
              label="Francisco Morazán"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Gracias_a_Dios} onChange={handleChange} name="Gracias_a_Dios" />
              }
              label="Gracias a Dios"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Intibuca} onChange={handleChange} name="Intibuca" />
              }
              label="Intibucá"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Islas_de_la_Bahia} onChange={handleChange} name="Islas_de_la_Bahia"/>
              }
              label="Islas de la Bahía"
            />
            <FormControlLabel
              control={
                <Checkbox checked={La_Paz} onChange={handleChange} name="La_Paz" />
              }
              label="La Paz"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Lempira} onChange={handleChange} name="Lempira" />
              }
              label="Lempira"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Ocotepeque} onChange={handleChange} name="Ocotepeque"/>
              }
              label="Ocotepeque"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Olancho} onChange={handleChange} name="Olancho" />
              }
              label="Olancho"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Santa_Barbara} onChange={handleChange} name="Santa_Barbara" />
              }
              label="Santa Bárbara"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Valle} onChange={handleChange} name="Valle"/>
              }
              label="Valle"
            />
            <FormControlLabel
              control={
                <Checkbox checked={Yoro} onChange={handleChange} name="Yoro" />
              }
              label="Yoro"
            />

          </div>
       
        </FormControl>
   
       
      </Box>
      </List>
    );
  }
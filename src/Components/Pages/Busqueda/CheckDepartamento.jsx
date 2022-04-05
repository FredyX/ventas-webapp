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

export default function CheckDepartamento( {setDepartaments}) {
   
  const [departamentos, setDepartamentos ] = React.useState([
    {name:'Atlantida',checked:false},
    {name:'Choluteca',checked: false},
    {name:'Colon',checked:false},
    {name:'Comayagua',checked: false},
    {name:'Copan',checked: false},
    {name:'Cortes',checked: false},
    {name:'El_Paraiso',checked: false},
    {name:'Francisco_Morazan',checked: false},
    {name:'Gracias_a_Dios',checked: false},
    {name:'Intibuca',checked: false},
    {name:'Islas_de_la_Bahia',checked: false},
    {name:'La_Paz',checked: false},
    {name:'Lempira',checked: false},
    {name:'Ocotepeque',checked: false},
    {name:'Olancho',checked: false},
    {name:'Santa_Barbara',checked: false},
    {name:'Valle',checked: false},
    {name:'Yoro',checked: false},
  ]);

    const getArreglo = (estado) => {
      const arreglo = [];
      estado.map( (item, index) => {
        if(item.checked){
          arreglo.push(index+1);
        }
      });
      return arreglo;
    }
    const handleCheckbox = ({target}) => {      
      let departamentosActualizados = [...departamentos];
      let index = departamentosActualizados.findIndex(x => x.name === target.name);
      if(index !== -1){
        departamentosActualizados[index].checked = !departamentosActualizados[index].checked;
        setDepartamentos(departamentosActualizados);
        setDepartaments(getArreglo(departamentosActualizados));
      }
    }    
  
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
            {
              departamentos.map( (item) => {

                return (
                  <FormControlLabel
                    control={
                  <Checkbox
                    checked={item.checked} 
                    onChange={handleCheckbox} 
                    name={item.name} 
                  />
                }
                label={item.name} />
                )
              })            
            }            
          </div>       
        </FormControl>          
      </Box>
      </List>
    );
  }
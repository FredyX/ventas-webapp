import * as React from 'react';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import categoriesService from "../../../services/categories.service.js"
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

import  "./Busqueda.scss";


export default function CheckCategorias({ passCategoriesChange, setCategorias}) {
  const [cate, setCate] = useState({});
  const [checked, setChecked] = React.useState([]);
  
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    passCategoriesChange(newChecked);
  };

  useEffect(() => {
    getCategorias();
  }, [])

  const getCategorias = async () => {
    const categoria = await categoriesService.getAll();
    let cat = {};
    categoria.data.map(c => {
      cat[c.id] = c.categorie_name;
    })
    setCate(cat);
  }

  return (
    <List className='estilotexto'
      sx={{
        marginTop: 1,
        width: 'auto',
        heigth: '100%',
        maxWidth: 240,
        bgcolor: 'gris',
        position: 'left',
        overflow: 'auto',
        maxHeight: 200,
        display: 'flex',
        fontSize: 16,
        background: 'white',
        border: 0,
        borderRadius: 1.5,
        color: '#0000000',
        padding: '0 50px',
      }}
    >
      <ul>
        {
          Object.keys(cate).map(key => {
            let label = cate[key];
            let value = key;
            return (
              <ListItemButton key={value} role={undefined} onClick={handleToggle(Number(value))} dense>
                  
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(Number(value)) !== -1}
                />
                <ListItemText id={value} primary={label} />
              </ListItemButton>
            )
          })
        }
      </ul>
    </List>
  );
}

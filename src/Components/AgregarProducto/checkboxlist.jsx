import * as React from 'react';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import categoriesService from "../../services/categories.service.js"

import styles from "./AgregarProducto.scss";

export default function PinnedSubheaderList({passCategoriesChange}) {
  const [cate, setCate] = useState([])
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
    console.log(categoria.data[1]);
    let cat = [];
    for (let index = 0; index < categoria.data.length; index++) {
      cat[index] = categoria.data[index].categorie_name;
    }
    setCate(cat);
  }

  return (

    <List className='estilotexto'
      sx={{
        marginTop: 1,
        width: '150%',
        heigth: '150%',
        maxWidth: 400,
        bgcolor: 'gris',
        position: 'center',
        overflow: 'auto',
        maxHeight: 80,
        display: 'flex',
        fontSize: 20,
        background: '#f3f3f3',
        border: 0,
        borderRadius: 1.5,
        color: '#5a5a5a',
        padding: '0 50px',
      }}
    >


      <ul>
        {
         cate.map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          console.log(labelId);
          return (
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
    
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
              />
    
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
    
          );
        })  
        }
      </ul>
    </List>
  );
}

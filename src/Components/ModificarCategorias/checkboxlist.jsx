import * as React from 'react';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import categoriesService from "../../services/categories.service.js"

import "./ModificarCategorias.scss";
import { RadioGroup } from '@mui/material';

export default function PinnedSubheaderList({ passCategoriesChange }) {
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
        width: '150%',
        heigth: '150%',
        maxWidth: 400,
        bgcolor: 'gris',
        position: 'center',
        overflow: 'auto',
        maxHeight: 500,
        display: 'flex',
        fontSize: 20,
        background: '#ffffff',
        border: 2,
        borderColor: '#00B712',
        borderRadius: 1.5,
        color: '#5a5a5a',
        padding: '0 50px',
      }}
    >
      <ul>
        {
          Object.keys(cate).map(key => {
            let label = cate[key];
            let value = key;
            return (
              <ListItemButton key={value} role={undefined} dense>
                
              <ListItemText id={value} primary={label} />
              </ListItemButton>
            )
          })
        }
      </ul>
    </List>
  );
}

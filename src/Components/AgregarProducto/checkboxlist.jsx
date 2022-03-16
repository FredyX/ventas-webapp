import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';


export default function PinnedSubheaderList() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

  return (



    <List
      sx={{
        marginTop: 1,
        width: '150%',
        heigth: '150%',
        maxWidth: 400,
        bgcolor: 'gris',
        position: 'center',
        overflow: 'auto',
        maxHeight: 110,
        display: 'flex',
        fontFamily: 'Arsenal',
        background: '#f3f3f3',
        border: 0,
        borderRadius: 1.5,
        color: 'dark',
        padding: '0 50px',
        typography: {
            fontFamily: [
              'Arsenal',
            ].join(','),
          },
      }}
    >
        
          <ul>
           
            {[0, 1, 2, 3, 4, 5].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
    
            return (
             
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                  
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                    />
                
                  <ListItemText id={labelId} primary={`Categoría ${value + 1}`} />
                </ListItemButton>
             
            );
          })}
          </ul>
    
    </List>
  );
}

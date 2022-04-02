import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';

const labels = {
  0.5: '1',
  1: '2',
  1.5: '3',
  2: '4',
  2.5: '5',
  3: '6',
  3.5: '7',
  4: '8',
  4.5: '9',
  5: '10',
};

export default function PuntuacionVendedor() {
  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 300,
        display: 'flex',
        alignItems: 'center',
        size: "large",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" size="large" />}
      />
      {value !== null && (
        <Box sx={{ ml: 3 }}>{labels[hover !== -1 ? hover : value] } </Box>
      )}
    </Box>
  );
}
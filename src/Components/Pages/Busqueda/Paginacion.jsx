import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
    
    export default function Paginacion({setPages}) {
      const [page, setPage] = React.useState(1);
      const handleChange = (event, value) => {
        setPage(value);
        setPages(value);
      };
    
      return (
        <Stack spacing={2}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      );
    }

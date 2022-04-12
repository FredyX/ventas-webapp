import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
    
    export default function Paginacion({setPages, total, handle}) {
      const [page, setPage] = React.useState(1);
      const handleChange = (event, value) => {
        setPage(value);
        setPages(value);
        let e = {
          preventDefault:event.preventDefault,
          keyCode: 13
        };
        handle(e);
      };
    
      return (
        <Stack spacing={2}>
          <Pagination count={total} page={page} onChange={handleChange}  />
        </Stack>
      );
    }

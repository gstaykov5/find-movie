import { Button, Grid, Typography } from '@mui/material';

import React from 'react';

export default function Hero() {
  return (
    <Grid
      sx={{
        marginTop: '10px',
        marginBottom: '10px',
        width: 'auto',
        height: 300,
        backgroundColor: '#d1d3d4',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography>Movies</Typography>
      <Button>Search</Button>
    </Grid>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Grid, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Grid
      sx={{
        marginTop: '10px',
        marginBottom: '10px',
        width: 'auto',
        height: 300,
        boxShadow: '1px 1px 10px black',
        backgroundImage: `url(${'https://c8.alamy.com/comp/D5DDDC/old-grunge-film-frame-vintage-background-D5DDDC.jpg'})`,
      }}
    >

      <Grid
        item
        container 
        width='auto'
        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', ml: 18 }}>
      <Grid item xs={4} >
        <Typography mt={17} ml={1} variant='h6' fontSize='24px'>In this site you can find and store you favorite movies</Typography>
      </Grid>
      <Grid item >
        <Button component={Link} to='/search' variant="contained" color="primary" sx={{m: '10px' }}>Search</Button>
      </Grid>
    </Grid>
    </Grid>
  )
}

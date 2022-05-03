import React from 'react';

import { Button, ButtonBase, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  
  return (
    <Grid item xs={10} sm container ml={4}>
      {movies.map(movie => (
      <Grid item container direction="column" spacing={2}>
        <Grid item xs>
            <Typography gutterBottom variant="h5" component="div" mb={2} mt={1} align='left'>
          <ButtonBase 
            sx={{ fontSize: '25px' }} 
            component={Link}
            to={`/movies/${movie.name}`}>
              {movie.name}
          </ButtonBase>
            </Typography>
          <Typography gutterBottom variant="body2" component="div" mb={2} align='left'>
            {movie.genres.join(', ')} | {movie.runtime} minutes
          </Typography>
          <Typography variant="body2" gutterBottom align='left'>
            {movie.summary.split('<p>')}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{mb: 4}} align='left'>
            {/* <Link to={{pathname: movie.url}} target='_blank'>Visit official site</Link> */}
            {movie.url}
          </Typography>
          <Button variant='outlined' color='success' sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            Add to favorite
          </Button>
        </Grid>
      </Grid>
      ))}
    </Grid>
  )
}

export default MovieDetails;
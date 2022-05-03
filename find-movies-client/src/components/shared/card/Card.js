import React from 'react';

import { Grid, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Card() {
  const movies = useSelector(state => state.moviesReducer.movies);

  return (
    <Grid item container xs={2} >
      {movies.map((movie) => (
        <ImageListItem 
          key={movie.id}
          sx={{ width: '200px',height: '50px', mb: 3 }} 
          component={Link}
          to={`/movies/${movie.name}`}
        >
          <img
            src={`${movie.image.medium}?w=248&fit=crop&auto=format`}
            srcSet={`${movie.image.medium}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={movie.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </Grid>
  )
}

export default Card;
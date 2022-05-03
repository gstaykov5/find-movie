import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import Card from '../../shared/card/Card';
import MovieDetails from '../../shared/movie-details/MovieDetails';
import SearchInput from '../../shared/search/Search';
import { fetchMovies } from '../../../features/movies/moviesSlice';

function Search() {
  const dispatch = useDispatch();
  const { movies, isLoading} = useSelector(state => state.moviesReducer);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  console.log(movies)

  return (
    <div>
      <Typography variant='h6' sx={{mt: 3, mb: 3}}>Search</Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <SearchInput />
      </Grid>

      <Box
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1800,
        flexGrow: 1,
      }}
      >
      <Grid container spacing={2}>
        {isLoading && <div>Loading...</div>}
        <Card />
        <MovieDetails movies={movies} />

      </Grid>
      </Box>
    </div>
  )
}

export default Search;
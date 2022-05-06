import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import Card from '../../shared/card/Card';
import MovieDetails from '../../shared/movie-details/MovieDetails';
import SearchInput from '../../shared/search/SearchInput';

function Search() {
  const [notFound, setNotFound] = useState('Movie is not found');

  const { searchedMovies } = useSelector(state => state.moviesReducer);

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
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center'}}>
        {searchedMovies.length === 0 ? (
          <Typography variant='h3' mt={3}>{notFound}</Typography>
        ) : (
        <>
          <Card movies={searchedMovies} />
          <MovieDetails movies={searchedMovies} />
        </>
        )}
      </Grid>
      </Box>
    </div>
  )
}

export default Search;
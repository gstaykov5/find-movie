import React, { Fragment, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Grid, Typography } from '@mui/material';

import Card from '../../../shared/card/Card';
import Hero from '../hero/Hero';
import { fetchMovies, getFavoriteMovies } from '../../../../features/movies/moviesSlice';

function Favorites() {
  const [findFavoriteMovies, setFindFavoriteMovies] = useState([])
  
  const dispatch = useDispatch();
  const { favoriteMovies, movies } = useSelector(state => state.moviesReducer);

  useEffect(() => {
    dispatch(getFavoriteMovies());
    dispatch(fetchMovies());
  }, [dispatch]);
  
  useEffect(() => {
    const asd = movies.filter(movie => favoriteMovies[0].favorites.indexOf(movie.id) !== -1);
    setFindFavoriteMovies(asd)

  }, [favoriteMovies, movies])
  
  return (
    <Fragment>
    <Hero />

    <Typography variant="h6" sx={{ marginTop: '30px', fontSize: '30px' }}>Your Favorites</Typography>
      {favoriteMovies?.length < 1 ? (
        <div>Loading.....</div>
        ): (
          <Grid item container xs={10} sx={{ display: 'flex', justifyContent: 'flex-start', ml: 25 }}>
            {/* <Grid item sx={{display: 'flex', justifyContent: 'center',}}> */}
              {findFavoriteMovies.map(movie => (
                <Card movies={[movie]} key={movie.id}/>
              ))}
            {/* </Grid> */}
        </Grid>
      )}
      </Fragment>
  )
}

export default Favorites
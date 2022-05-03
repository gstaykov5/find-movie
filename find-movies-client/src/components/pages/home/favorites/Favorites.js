import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@mui/material';

import Card from '../../../shared/card/Card';
import Hero from '../hero/Hero';

function Favorites() {
  const dispatch = useDispatch();
  const { movies, isLoading} = useSelector(state => state.moviesReducer);
  

  return (
    <div>
      <Hero />
      <Typography variant="h6" sx={{ marginTop: '30px', fontSize: '30px' }}>Your Favorites</Typography>
      {isLoading && <div>Loading.....</div>}
      <Card movies={movies}/>
    </div>
  )
}

export default Favorites
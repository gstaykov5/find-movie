import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ButtonBase, Grid, Typography } from '@mui/material';

import { addToFavorites, getFavoriteMovies, postFavoriteMovie, removeToFavorites, updateFavoriteMovie } from '../../../features/movies/moviesSlice';

function MovieDetails({ movies }) {
  const dispatch = useDispatch();
  
  const { favoriteMovies } = useSelector(state => state.moviesReducer);

  useEffect(() => {
    dispatch(getFavoriteMovies());
  }, [dispatch])

  const handleFavorite = (e, movie, action) => {
    if(favoriteMovies.length === 0) {
      const movieId =  {
        favorites: [movie.id]
      }
      console.log('first favorite movie: ',favoriteMovies)
      dispatch(postFavoriteMovie(movieId));
    } else {
      const movieAndCollectionId = {
        movieId: movie.id,
        collectionId: favoriteMovies[0]._id,
        action
      }
      if(e.target.innerText === 'ADD TO FAVORITE') {
        // movieAndCollectionId.action = 'push';
        dispatch(updateFavoriteMovie(movieAndCollectionId));
        dispatch(addToFavorites(movie.id));
      } else {
        // movieAndCollectionId.action = 'pull';
        dispatch(updateFavoriteMovie(movieAndCollectionId));
        dispatch(removeToFavorites(movie.id));
      }
    }
  }

  return (
    <Grid item xs={10} sm container ml={4}>
      {movies.map(movie => (
      <Grid item container direction="column" spacing={2} key={movie.id}>
        <Grid item xs>
            <Typography gutterBottom variant="h5" component="div" mb={2} mt={2} align='left'>
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
          {favoriteMovies[0]?.favorites.includes(movie.id) ? (
            <Button variant='outlined' color='error' onClick={(e) => handleFavorite(e, movie, 'pull')} sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              Remove from Favorite
            </Button>
          ) : (
            <Button variant='outlined' color='success' onClick={(e) => handleFavorite(e, movie, 'push')} sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              Add To Favorite
            </Button>
          )}
        </Grid>
      </Grid>
      ))}
    </Grid>
  )
}

export default MovieDetails;
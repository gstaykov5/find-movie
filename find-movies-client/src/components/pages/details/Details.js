import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Box, Button, Grid, Rating, TextField, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import Card from '../../shared/card/Card';
import MovieDetails from '../../shared/movie-details/MovieDetails';
import { fetchMovieDetail, getMovieCommentRating, postMovieCommentRating } from '../../../features/movies/moviesSlice';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

function Details() {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [comment, setComment] = useState('');

  const { movieTitle } = useParams();

  const dispatch = useDispatch();
  const { movieDetail, commentAndRating } = useSelector(state => state.moviesReducer);
  
  useEffect(() => {
    dispatch(fetchMovieDetail(movieTitle));
    console.log('1')
    console.log('detail', movieDetail)
  }, [dispatch, movieTitle])
  
  useEffect(() => {
    dispatch(getMovieCommentRating(movieDetail.id));
    console.log('2')
    console.log('comment', commentAndRating)
  }, [dispatch, movieDetail])
  
  useEffect(() => {
    // setValue(commentAndRating[0].rating)
    // setComment(commentAndRating[0].comment)
    if(commentAndRating[0].hasOwnProperty('rating')) {

      console.log('3')
      console.log('seters', commentAndRating.length)
    }
  }, [commentAndRating])

  const handleComment = (e) => {
    const data = {
      comment: comment,
      rating: Number(value),
      movieId: movieDetail.id
    }
    dispatch(postMovieCommentRating(data));
  }
  
  return (
    <Box
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1800,
        flexGrow: 1,
      }}
      >
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'flex-start', ml: 1, mt: 5 }}>
      {movieDetail.length === 0 ? (
          <div>Loading...</div>
        ) : (
        <>
          <Card movies={[movieDetail]} />
          <MovieDetails movies={[movieDetail]} />
        </>)}
      </Grid>

      <Typography variant='h5' align='left' ml={10} mb={1}>Your Review</Typography>

      <Rating
        name="hover-feedback"
        sx={{ display: 'flex', justifyContent: 'flex-start', ml: 10, width: '120px', mb: 3 }}
        value={value}
        precision={0.5}
        // getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {/* {value !== null && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: 10, mb: 3 }}>
          {labels[hover !== -1 ? hover : value]}
        </Box>
      )} */}
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id='outlined'
            label='Your private notes and comments about the movie...'
            value={comment}
            multiline
            focused
            rows={7}
            sx={{ display: 'flex', justifyContent: 'flex-start', ml: 10 }}
            style={{width: '700px'}}
            onChange={(e) => setComment(e.target.value)}
          />
        </Grid>
        <Grid item m={2} ml={10}>
          <Button variant='outlined' color='primary' onClick={handleComment}>Add Comment</Button>
        </Grid>
        </Grid>
    </Box>
  )
}

export default Details
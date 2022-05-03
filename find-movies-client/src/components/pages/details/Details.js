import React, { useState } from 'react';

import { Box, Grid, Rating, TextField, Typography } from '@mui/material';
import Card from '../../shared/card/Card';
import MovieDetails from '../../shared/movie-details/MovieDetails';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function Details() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1800,
        flexGrow: 1,
      }}
      >
      <Grid container spacing={2}>
        <Card />
        <MovieDetails />
      </Grid>

      <Typography variant='h5' align='left' ml={10} mb={1}>Your Review</Typography>

      <Rating
        name="hover-feedback"
        sx={{ display: 'flex', justifyContent: 'flex-start', ml: 10, width: '120px' }}
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: 10 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}

      <TextField
        id='outlined'
        label='Your private notes and comments about the movie...'
        multiline
        rows={7}
        sx={{ display: 'flex', justifyContent: 'flex-start', ml: 10}}
        style={{width: '700px'}}
      />
    </Box>
  )
}

export default Details
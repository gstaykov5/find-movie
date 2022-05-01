import React from 'react';

import { Button, Grid, Typography } from '@mui/material';

function MovieDetails() {
  return (
    <Grid item xs={10} sm container ml={4}>
      <Grid item container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="h6" component="div" mb={2}>
            Movie Title
          </Typography>
          <Typography gutterBottom variant="body2" component="div" mb={2}>
            Drama, Comedy | 90 minutes
          </Typography>
          <Typography variant="body2" gutterBottom>
          Full resource of movie Full resource of movie Full resource of movie Full resource of movie Full resource of movie Full resource of movieFull resource of movie Full resource of movie Full resource of movie Full resource of movie Full resource of movie Full resource of movieFull resource of movie Full resource of movie Full resource of movie Full resource of movie Full resource of movie Full resource of movie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Visit officeal site
          </Typography>
        </Grid>
        <Grid item>
          <Button>
            Add to favorite
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieDetails;
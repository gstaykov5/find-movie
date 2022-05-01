import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Card from '../../shared/card/Card'
import MovieDetails from '../../shared/movie-details/MovieDetails'
import SearchInput from '../../shared/search/Search'

function Search() {
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

      <Paper
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
      </Paper>

      {/* <Box
        sx={{
          width: 'auto',
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        >
          <Grid item lg={2} sx={{ border: '1px solid black' }}>
            <Card />
          </Grid>
          <Grid item lg={10} sx={{ border: '1px solid black' }}>
            <MovieDetails />
          </Grid>
        </Grid>
      </Box> */}
    </div>
  )
}

export default Search;
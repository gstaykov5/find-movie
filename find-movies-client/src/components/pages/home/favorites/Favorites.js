import { Typography } from '@mui/material'
import React from 'react'
import Card from '../../../shared/card/Card'
import Hero from '../hero/Hero'

function Favorites() {
  return (
    <div>
      <Hero />
      <Typography variant="h6" sx={{ marginTop: '30px', fontSize: '30px' }}>Your Favorites</Typography>
      <Card />
    </div>
  )
}

export default Favorites
import React from 'react';

import { ButtonBase, Grid, ImageList, ImageListItem } from '@mui/material';

function Card() {
  return (
    <Grid item container xs={2} >
      <ButtonBase >
        <ImageList sx={{ width: 700, height: 350, ml: 10 }} cols={3} rowHeight={164}>
          {/* {itemData.map((item) => ( */}
            <ImageListItem key={1}>
              <img
                src={`https://lumiere-a.akamaihd.net/v1/images/p_aladdin2019_17638_d53b09e6.jpeg`}
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                // alt={item.title}
                alt='img'
                loading="lazy"
              />
            </ImageListItem>
          {/* ))} */}
        </ImageList>
      </ButtonBase>
    </Grid>
  )
}

export default Card;
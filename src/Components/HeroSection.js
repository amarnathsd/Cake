import { Typography, Grid, Button } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Cake from '../Images/cake.png'
// import { Box } from '@mui/material'

const HeroSection = () => {
  return (
    <Grid container direction="row" alignItems="center" order={{xs:2, sm:1}}> 
        <Grid Item xs={12} sm={6} >
            <Typography variant='h3' color={'inherit'}>
                A bliss in every byte
            </Typography>
            <Typography variant='h5' color={'inherit'}>
              We affer teasty sweets
            </Typography>
            <Button size='large' variant='contained' sx={{borderRadius: 5}} > 
            Call us
            </Button>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
        <Avatar alt= "name" src={Cake} sx={{width : '80%', height: '80%' }} />
        </Grid>
    </Grid>
  )
}

export default HeroSection
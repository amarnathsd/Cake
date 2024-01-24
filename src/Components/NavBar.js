import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const NavBar = () => {
  return (
    <AppBar position='fixed' color='primary'>
    <Toolbar>
    <Typography variant='h6' flexGrow={1}>
        Blissful bytes
    </Typography>

    <Button variant='text' color='inherit' startIcon={<LoginIcon/>}>
         Login
    </Button>
    <Button variant='text' color='inherit' endIcon={<ExitToAppIcon/>}>
         Logout
    </Button>
    </Toolbar>




    </AppBar>
  )
}

export default NavBar
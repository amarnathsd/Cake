import React from 'react'
import NavBar from "./Components/NavBar"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from './Components/HeroSection';
import { Container } from '@mui/material';
import CakeSection from './Components/CakeSectio';
import ContactUs from './Components/ContactUs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <NavBar/>
        <Container>
        <HeroSection/>
        <CakeSection/>
        <ContactUs/>
        </Container>
    
    </ThemeProvider>

  )
}
export default App;

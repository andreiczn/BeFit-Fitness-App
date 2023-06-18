import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/hero-banner2.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#CBF1F5" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={2}>
        See which exercises fit your goals!
      </Typography>
      <Button variant="contained" style={{ backgroundColor: '#CBF1F5' }} href="#exercises">
        Explore our Workouts
      </Button>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{height: '400%'}}/>
    </Box>
  );
}

export default HeroBanner;


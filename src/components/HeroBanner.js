import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/hero-banner2.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#A27B5C" fontWeight="600" fontSize="26px">
       BeFit Fitness Club
      </Typography>
      <Typography color="#DCD7C9" fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={2}>
        See which exercises fit your goals!
      </Typography>
      <Button variant="contained" style={{ backgroundColor: '#A27B5C' }} href="#exercises">
        Explore our Workouts
      </Button>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
        style={{
          height: '400%',
          borderRadius: '15px', // Adjust the border-radius as needed
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add a shadow
        }}
      />
    </Box>
  );
}

export default HeroBanner;

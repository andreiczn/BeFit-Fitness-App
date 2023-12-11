import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Welcome!</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Get Ready To Become<br />
      The Best Version of Yourself
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Start Workout</a>
    </Stack>
    <Typography
  fontWeight={600}
  color="#FF2625"
  sx={{
    opacity: '0.1',
    display: { lg: 'block', xs: 'none' },
    fontSize: '300px',  // Adjust the font size based on your preference
    textAlign: 'center',  // Center the text
    marginY: 'auto',  // Center vertically
  }}
>
  BeFit
</Typography>

    <img
  src={HeroBannerImage}
  alt="hero-banner"
  className="hero-banner-img"
  style={{
    borderRadius: '20px',  // Adjust the border radius based on your preference
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',  // Adjust the shadow based on your preference
    //width: '100%',  // Make sure the image takes the full width of its container
  }}
/>
  </Box>
);

export default HeroBanner;
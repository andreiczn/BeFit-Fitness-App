// LogoNavbar.js
import React from 'react';
import { Stack } from '@mui/material';
import Logo from '../assets/icons/betterlogo.png';

const LogoNavbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
        transition: 'all 1s ease',
      }}
      px="20px"
    >
      <img
        src={Logo}
        alt="Befit Logo"
        style={{
          width: '110px',
          height: '100px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          transition: 'all 1s ease',
        }}
      />
    </Stack>
  );
};

export default LogoNavbar;

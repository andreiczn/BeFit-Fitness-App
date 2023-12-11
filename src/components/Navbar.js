import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      px: '20px',
    }}
  >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '96px', height: '96px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
        }}
      >
        <Typography>Home</Typography>
      </Link>
      <Link to="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
        <Typography>Exercises</Typography>
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;

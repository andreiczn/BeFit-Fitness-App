import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/icons/befitlogo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Befit Logo"
          style={{
            width: '110px',
            height: '100px',
            margin: '0px 20px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '4px', 
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#292D32',
            borderBottom: location.pathname === '/' ? '3px solid #E3FDFD' : 'none',
          }}
        >
          Home
        </Link>
        <Link
          to="/exercises"
          style={{
            textDecoration: 'none',
            color: '#292D32',
            borderBottom: location.pathname === '/exercises' ? '3px solid #E3FDFD' : 'none',
          }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;

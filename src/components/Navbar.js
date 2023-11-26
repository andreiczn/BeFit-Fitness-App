import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/icons/betterlogo.png';

const Navbar = () => {
  const location = useLocation();

  // Check if the current location is the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
        transition: 'all 1s ease',
      }}
      px="20px"
    >
      {isLoginPage ? (
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
      ) : (
        <>
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
                transition: 'all 1s ease',
              }}
            />
          </Link>
          <Stack
            direction="row"
            gap="40px"
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems="flex-end"
            transition="all 1s ease"
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: '#DCD7C9',
                borderBottom: location.pathname === '/' ? '3px solid #E3FDFD' : 'none',
                transition: 'all 1s ease',
              }}
            >
              Home
            </Link>
            <Link
              to="/exercises"
              style={{
                textDecoration: 'none',
                color: '#DCD7C9',
                borderBottom: location.pathname === '/exercises' ? '3px solid #E3FDFD' : 'none',
                transition: 'all 1s ease',
              }}
            >
              Exercises
            </Link>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Navbar;

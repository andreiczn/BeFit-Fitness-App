// Login.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import LogoNavbar from '../components/LogoNavbar'; // Update the import

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // For simplicity, set default credentials and call the onLogin function
    const defaultCredentials = { username: 'demoUser', password: 'demoPassword' };
    onLogin(defaultCredentials);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <LogoNavbar /> {/* Use LogoNavbar instead of NavbarLogo */}
      <form style={{ textAlign: 'center' }}>
        <TextField
          label="Username"
          variant="outlined"
          size="large"
          fullWidth
          margin="normal"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <TextField
          label="Password"
          variant="outlined"
          size="large"
          fullWidth
          type="password"
          margin="normal"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          size="large"
          style={{ backgroundColor: '#A27B5C', color: '#DCD7C9', marginTop: '16px' }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;


import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Login from './pages/Login';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import ExerciseDetails from './components/Details';
import LogoNavbar from './components/LogoNavbar';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto" className="page-transition">
      {user ? (
        <>
          <Navbar user={user} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails exercises={exercises} />} />
            <Route path="/exercises" element={<Exercises exercises={exercises} setExercises={setExercises} />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        </Routes>
      )}
    </Box>
  );
};

export default App;

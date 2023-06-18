import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import ExerciseDetails from './components/Details'; 

const App = () => {
  const [exercises, setExercises] = useState([]);

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails exercises={exercises} />} /> 
        <Route path="/exercises" element={<Exercises exercises={exercises} setExercises={setExercises} />} />
      </Routes>
    </Box>
  );
};

export default App;

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ExerciseCard from '../components/ExerciseCard';

const ExerciseList = ({ exercises }) => (
  <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
    {exercises.map((exercise) => (
      <Link key={exercise.id} to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
        <ExerciseCard exercise={exercise} />
      </Link>
    ))}
  </Stack>
);

export default ExerciseList;

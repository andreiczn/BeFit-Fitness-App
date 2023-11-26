import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Instructions from './Instructions';

const ExerciseDetails = () => {
  const { id } = useParams();

  const exercise = Instructions.find((exercise) => exercise.id === id);

  if (!exercise) {
    return <div>Exercise not found.</div>;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      mt="20px"
    >
      <Typography variant="h4" mb="10px">
        {exercise.name}
      </Typography>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          width: '100%',
          maxWidth: '400px',
        }}
      />
      <Typography variant="subtitle1" mt="20px" color="#DCD7C9">
        Body Part: {exercise.bodyPart}
      </Typography>
      <Typography variant="subtitle1" color="#DCD7C9">
        Target: {exercise.target}
      </Typography>
      <Typography variant="subtitle1" color="#DCD7C9">
        Difficulty: {exercise.difficulty}
      </Typography>
      <Typography variant="subtitle1" color="#DCD7C9">
        Equipment: {exercise.equipment}
      </Typography>
      <Typography variant="subtitle1" mt="20px" color="#DCD7C9">
        Instructions:
      </Typography>
      <Typography variant="body1" ml="20px" color="#DCD7C9">
        {exercise.instructions.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </Typography>
    </Box>
  );
};

export default ExerciseDetails;

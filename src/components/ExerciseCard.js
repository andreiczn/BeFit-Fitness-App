import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
  src={exercise.gifUrl}
  alt={`GIF of ${exercise.name}`}
  loading="lazy"
  style={{
    borderRadius: '10px', // Adjust the value based on your preference
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Adjust the values for the shadow
  }}
/>


      <Stack direction="row" spacing={1}>
        <Button color="primary" variant="contained" size="small">
          {exercise.bodyPart}
        </Button>
        <Button color="secondary" variant="contained" size="small">
          {exercise.target}
        </Button>
      </Stack>
      <Typography sx={{ ml: '21px', color: '#000', fontWeight: 'bold', fontSize: { lg: '24px', xs: '20px' }, mt: '11px', pb: '10px', textTransform: 'capitalize' }}>
        {exercise.name}
      </Typography>
    </Link>
  );
  
  export default ExerciseCard;
  
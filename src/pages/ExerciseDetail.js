import React from 'react';
import { Box, Typography } from '@mui/material';
import ExerciseList from '../components/ExerciseList';

const ExerciseDetail = () => {
  const exercises = [
    {
      id: 'squat',
      name: 'Squat',
      bodyPart: 'Lower Body',
      target: 'Legs',
      gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/06/bodyweight-squat-2.gif',
      
    },
    {
      id: 'bicep-curl',
      name: 'Bicep Curl',
      bodyPart: 'Upper Body',
      target: 'Arms',
      gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/01/inner-bicep-curl.gif',
      
    },
    {
      id: 'sit-ups',
      name: 'Sit-ups',
      bodyPart: 'Core',
      target: 'Abs',
      gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif',
      
    },
  ];

  return (
    <Box id="exercise-detail" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Here's What You Can Do!
      </Typography>
      <ExerciseList exercises={exercises} />
    </Box>
  );
};

export default ExerciseDetail;
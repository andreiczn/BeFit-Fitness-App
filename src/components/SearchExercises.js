import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);

  return (
    <Stack alignItems="flex-start" mt="37px" justifyContent="center" p="20px">
      <Box position="relative">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="left">
          What Would You Like<br />To Work Today?
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
}

export default SearchExercises;

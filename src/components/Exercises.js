import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises }) => {
  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px" className="page-transition">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Explore The Exercises
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {/* Squat Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'squat',
            name: 'Squat',
            bodyPart: 'Lower Body',
            target: 'Legs',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/06/bodyweight-squat-2.gif',
          }}
        />

        {/* Bicep Curl Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'bicep-curl',
            name: 'Bicep Curl',
            bodyPart: 'Upper Body',
            target: 'Arms',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/01/inner-bicep-curl.gif',
          }}
        />

        {/* Sit Ups Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'sit-ups',
            name: 'Sit Ups',
            bodyPart: 'Core',
            target: 'Abs',
            gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif',
          }}
        />

        {/* Hammer Curls Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'hammer-curls',
            name: 'Hammer Curls',
            bodyPart: 'Arms',
            target: 'Biceps',
            gifUrl: 'https://www.fitundattraktiv.de/wp-content/uploads/2018/09/hammer_curls_kurzhantel-beidarmig-stehend.gif',
          }}
        />

        {/* Dumbbell Skullcrushers Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'dumbbell-skullcrushers',
            name: 'Skullcrushers',
            bodyPart: 'Arms',
            target: 'Triceps',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/incline-skullcrusher.gif',
          }}
        />

        {/* Lat Rows Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'lat-rows',
            name: 'Lat Rows',
            bodyPart: 'Back',
            target: 'Lats',
            gifUrl: 'https://liftingfaq.com/wp-content/uploads/2022/11/dumbbell-single-arm-row.gif',
          }}
        />

        {/* Rear Delt Flys Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'rear-delt-flys',
            name: 'Rear Delt Flys',
            bodyPart: 'Shoulders',
            target: 'Rear Deltoids',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-rear-delt-fly.gif',
          }}
        />

        {/* Lateral Raises Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'lateral-raises',
            name: 'Lateral Raises',
            bodyPart: 'Shoulders',
            target: 'Side Deltoids',
            gifUrl: 'https://homeworkouts.org/wp-content/uploads/anim-dumbbell-lateral-raise.gif',
          }}
        />

        {/* Dumbbell Press Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'dumbbell-press',
            name: 'Dumbbell Press',
            bodyPart: 'Upper Body',
            target: 'Chest',
            gifUrl: 'https://newlife.com.cy/wp-content/uploads/2019/11/16241301-Dumbbell-Reverse-Bench-Press_Chest_360.gif',
          }}
        />

        {/* Push Ups Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'push-ups',
            name: 'Push Ups',
            bodyPart: 'Upper Body',
            target: 'Chest, Triceps',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/05/weighted-push-up.gif',
          }}
        />
            {/* Bulgarian Split Squat Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'bulgarian-split-squat',
            name: 'Bulgarian Split Squat',
            bodyPart: 'Lower Body',
            target: 'Legs',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/bulgarian-split-spuat.gif',
          }}
        />

        {/* Calf Raises Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'calf-raises',
            name: 'Calf Raises',
            bodyPart: 'Lower Body',
            target: 'Calves',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/06/single-leg-standing-calf-raise.gif',
          }}
        />

        {/* Deadlift Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'deadlift',
            name: 'Deadlift',
            bodyPart: 'Lower Body',
            target: 'Legs, Back',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-romanian-deadlift.gif',
          }}
        />
        {/* Crunches Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'crunches',
            name: 'Crunches',
            bodyPart: 'Core',
            target: 'Abs',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/12/knee-touch-crunch.gif',
          }}
        />

        {/* Leg Raises Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'leg-raises',
            name: 'Leg Raises',
            bodyPart: 'Core',
            target: 'Lower Abs',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/06/lying-leg-raise.gif',
          }}
        />

        {/* Plank Exercise Card */}
        <ExerciseCard
          exercise={{
            id: 'plank',
            name: 'Plank',
            bodyPart: 'Core',
            target: 'Abs, Core',
            gifUrl: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/body-saw-plank.gif',
          }}
        />
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
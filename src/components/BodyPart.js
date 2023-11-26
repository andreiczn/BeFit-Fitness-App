import React from 'react';
import { Stack, Typography } from '@mui/material';

import LowerBodyIcon from '../assets/icons/craci.png';
import UpperBodyIcon from '../assets/icons/upper.png';
import MidCoreIcon from '../assets/icons/midcore.png';
import CardioIcon from '../assets/icons/cardio.png';

const BodyPart = ({ name, logo, setBodyPart, bodyPart }) => {
  let icon;

  if (logo === 'craci.png') {
    icon = LowerBodyIcon;
  } else if (logo === 'upper.png') {
    icon = UpperBodyIcon;
  } else if (logo === 'midcore.png') {
    icon = MidCoreIcon;
  } else if (logo === 'cardio.png') {
    icon = CardioIcon;
  }
  const scrollPositions = {
    'upper body': 1300,
    'lower body': 2700,
    'mid/core': 3200,
    'cardio': 4000,
  };

  return (
    <Stack
      component="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === name
          ? {
              borderTop: '4px solid #FF2625',
              background: '#DCD7C9',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            }
          : {
              background: '#DCD7C9',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            }
      }
      onClick={() => {
        setBodyPart(name);
        window.scrollTo({ top: scrollPositions[name.toLowerCase()], left: 0, behavior: 'smooth' });
      }}
    >
      <img src={icon} alt={name} style={{ width: '80px', height: '80px' }} />
      <Typography
        variant="h6"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
        fontSize={24}
      >
        {name}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

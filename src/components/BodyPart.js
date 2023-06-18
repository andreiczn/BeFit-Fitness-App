import React from 'react';
import { Stack, Typography } from '@mui/material';

import LowerBodyIcon from '../assets/icons/craci.png';
import UpperBodyIcon from '../assets/icons/upperbody.png';
import MidCoreIcon from '../assets/icons/midcore.png';

const BodyPart = ({ name, logo, setBodyPart, bodyPart }) => {
  let icon;
  
  if (logo === 'craci.png') {
    icon = LowerBodyIcon;
  } else if (logo === 'upperbody.png') {
    icon = UpperBodyIcon;
  } else if (logo === 'midcore.png') {
    icon = MidCoreIcon;
  }

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
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
          : {
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
      }
      onClick={() => {
        setBodyPart(name);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
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

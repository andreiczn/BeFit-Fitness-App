import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import BodyPart from './BodyPart';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '20px', height: '20px' }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: '20px', height: '20px' }} />
    </Typography>
  );
};

const HorizontalScrollbar = ({ bodyPart, setBodyPart }) => {
    const data = [
        { name: 'Upper Body', logo: 'upperbody.png' },
        { name: 'Lower Body', logo: 'craci.png' },
        { name: 'Mid/Core', logo: 'midcore.png' },
      ];

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box key={item.name} itemId={item.name} title={item.name} m="0 40px">
                <BodyPart name={item.name} logo={item.logo} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>
    ))}
    </ScrollMenu>


  );
};

export default HorizontalScrollbar;

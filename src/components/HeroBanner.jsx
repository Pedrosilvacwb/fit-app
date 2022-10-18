import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

import banner from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', sm: '70px' },
        ml: { sm: '50px' },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{ fontSize: { ls: '44px', xs: '40px' } }}
        mb={3}
      >
        Sangue, Suor <br /> e Lagrimas
      </Typography>

      <Typography mb={4} fontSize="22px" lineHeight="35px">
        Confira os melhores exercicios.
      </Typography>
      <Button
        sx={{ padding: '15px', background: '#FF2625' }}
        href="#exercises"
        variant="contained"
      >
        Exercicios
      </Button>

      <Typography
        fontWeight={700}
        color="#FF2625"
        fontSize="200px"
        sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' } }}
      >
        Exercicios
      </Typography>
      <img className="hero-banner-img" src={banner} alt="" />
    </Box>
  );
};

export default HeroBanner;

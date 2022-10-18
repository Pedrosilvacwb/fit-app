import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';
const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  console.log(targetMuscleExercises);
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant="h3" mb={5}>
        Exercicios para o mesmo grupo muscular
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5} mt={5}>
        Exercicios com o mesmo equipamento
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;

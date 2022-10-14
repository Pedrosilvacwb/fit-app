import React, { useState } from 'react';

import { Box, Stack, TextField, Button, Typography } from '@mui/material';

import { fetchData, exerciseOptions } from '../utils/fetchData';

import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercise = () => {
  const [search, setSearch] = React.useState('');
  const [exercises, setexercises] = React.useState([]);
  const [bodyParts, setBodyParts] = React.useState([]);

  React.useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions,
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);
  console.log(bodyParts);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions,
      );

      const searchedExercises = exercisesData.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search) ||
          ex.target.toLowerCase().includes(search) ||
          ex.equipment.toLowerCase().includes(search) ||
          ex.bodyPart.toLowerCase().includes(search),
      );
      setSearch('');
      setexercises(searchedExercises);
    }
  };

  return (
    <Stack justifyContent="center" p="20px" alignItems="center" mt="37px">
      <Typography
        textAlign="center"
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
      >
        Pesquise Entre os Melhores Exercicios
      </Typography>

      <Box position="relative" mt="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={({ target }) => {
            setSearch(target.value.toLowerCase().trim());
          }}
          placeholder="Pesquisar Exercicio..."
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Pesquisar
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchExercise;

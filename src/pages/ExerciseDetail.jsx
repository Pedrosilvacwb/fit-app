import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = React.useState({});
  const [exerciseVideos, setExerciseVideos] = React.useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = React.useState([]);
  const [equipmentExercises, setEquipmentExercises] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions,
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions,
      );
      setExerciseVideos(exerciseVideosData);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions,
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions,
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        name={exerciseDetail.name}
        exerciseVideos={exerciseVideos}
      />
      <SimilarExercises
        equipmentExercises={equipmentExercises}
        targetMuscleExercises={targetMuscleExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;

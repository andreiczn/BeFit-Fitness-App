import React from 'react';
import { useParams } from 'react-router-dom';
import Instructions from './Instructions';

const ExerciseDetails = () => {
  const { id } = useParams();

  const exercise = Instructions.find((exercise) => exercise.id === id);

  if (!exercise) {
    return <div>Exercise not found.</div>;
  }

  return (
    <div>
      <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>{exercise.name}</h2>
      <img src={exercise.gifUrl} alt={exercise.name} style={{ marginBottom: '20px' }} />
      <p style={{ fontSize: 'px', marginBottom: '5px' }}>Body Part: {exercise.bodyPart}</p>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>Target: {exercise.target}</p>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>Difficulty: {exercise.difficulty}</p>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>Equipment: {exercise.equipment}</p>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>Instructions:</p>
      <p style={{ fontSize: '16px', marginLeft: '20px' }}>{exercise.instructions}</p>
    </div>
  );
};

export default ExerciseDetails;

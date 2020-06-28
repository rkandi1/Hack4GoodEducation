import React, {useEffect, useState} from 'react';
import Navbar from '../nav'; 
import EmotionTable from './EmotionTable'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import EmotionCard from './EmotionCard';

const InstructorHome = (props) => {
  const emotionList = {'Rohan': 'Surprised', 'Janvi': 'Neutral', 'Themis': 'Neutral', 'Hemanth': 'Happy'};
  return (
    <div>
      <Navbar />
      <Container>
        <EmotionTable
          list={emotionList}
        />
      </Container>
    </div>
  );
};

export default InstructorHome;
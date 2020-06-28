import React, {useEffect, useState} from 'react';
import Navbar from '../nav'; 
import EmotionTable from './EmotionTable'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import EmotionCard from './EmotionCard';

const InstructorHome = (props) => {
  const [emotions, setEmotions] = useState([]);
  const emotionList = [{'Name':'Hemanth', 'Emotion': 'Happy'},
                       {"Name": 'Rohan',"Emotion": 'Surprised'},
                       {'Name':'Janvi','Emotion':'Neutral'},
                       {'Name':'Themis', 'Emotion':'Neutral'}];
  return (
    <div>
      <Navbar
        setEmotions={setEmotions}
      />
      <Container>
        <EmotionTable
          list={emotionList}
        />
      </Container>
    </div>
  );
};

export default InstructorHome;
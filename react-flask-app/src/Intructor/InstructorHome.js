import React, {useEffect, useState} from 'react';
import Navbar from '../nav'; 
import EmotionTable from './EmotionTable'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import EmotionCard from './EmotionCard';

const InstructorHome = (props) => {
  const [question, setQuestion] = useState([]);
  const [emotions, setEmotions] = useState([]);
  const emotionList = [{'Name':'Hemanth', 'Emotion': 'Happy'},
                       {"Name": 'Rohan',"Emotion": 'Surprised'},
                       {'Name':'Janvi','Emotion':'Neutral'},
                       {'Name':'Themis', 'Emotion':'Neutral'}];
  
  useEffect(() => {
    fetch("http://localhost:3000/teacher/emotion")
    .then((resp) => (resp))
    .then((data) => {
      alert(data);
    })
    .catch((err) => {
      alert(err);
    })
  }, [question]);
  
  return (
    <div>
      <Navbar
        setQuestion={setQuestion}
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
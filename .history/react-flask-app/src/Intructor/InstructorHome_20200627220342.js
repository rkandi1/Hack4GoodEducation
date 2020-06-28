import React from 'react';
import Navbar from '../nav'; 
import EmotionTable from './EmotionTable'
import Grid from '@material-ui/core/Grid'

const InstructorHome = () => {
  return (
    <div>
      <Navbar />
      <EmotionTable />
    </div>
  );
};

export default InstructorHome;
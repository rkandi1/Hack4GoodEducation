import React, {useEffect, useState} from 'react';
import Navbar from '../nav';
import ContentCard from './ContentCard';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

const StudentHome = (props) => {
  const [question, setQuestion] = useState(1);
  return (
    <div>
      <Navbar setQuestion={setQuestion}/>
      <Container>
        <GridList cellHeight={750} cols={13}>
          <GridListTile key={1} cols={12}>
            <ContentCard question={question}/>
          </GridListTile>
          <GridListTile key={0} cols={1} alignItems={"center"} justify={"center"}>
            <Button style={{ minHeight: '65vh' }}>
              <ArrowForwardIosIcon />
            </Button>
          </GridListTile>
        </GridList>
      </Container>
    </div>
  );
};

export default StudentHome;
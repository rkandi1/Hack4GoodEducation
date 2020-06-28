import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 650,
    boxShadow: 4  
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    marginBottom: 20
  },
  pos: {
    marginBottom: 8
  }
});

const SimpleCard = (props) => {
  const [answer1, setAnswer1] = useState('65536');
  const [answer2, setAnswer2] = useState("36");
  const [answer3, setAnswer3] = useState("Nooooo Idea")
  const [typedAnswer, setTypedAnswer] = useState('');

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props.question);

  // Change card based on the number.
  if(props.question == 3) {
    return (
      <Card className={classes.root} alignItems={'center'}>
        <CardContent>
          <Typography
            align={'center'}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Question 3
          </Typography>
          <Typography align={'center'} variant="h2" component="h2">
            {"Prove Reimann's hypothesis."}
          </Typography>
          <br />
          <br />
          <Typography align={'center'} variant="body2" component="p">
            <TextField id="standard-basic" label="Standard" onChange={(e)=>{setTypedAnswer(e.target.value)}}/>
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
          <Button size="large" onClick={() => {
            console.log(answer3 === typedAnswer)
          }}>Submit</Button>
        </CardActions>
      </Card>
    );
  }

  if(props.question == 2) {
    return (
      <Card className={classes.root} alignItems={'center'}>
        <CardContent>
          <Typography
            align={'center'}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Question 2
          </Typography>
          <Typography align={'center'} variant="h2" component="h2">
            {"If there are 9 people, and every person shakes another person's hand once. How many handshakes overall?"}
          </Typography>
          <br />
          <br />
          <Typography align={'center'} variant="body2" component="p">
            <TextField id="standard-basic" label="Standard" onChange={(e)=>{setTypedAnswer(e.target.value)}}/>
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
          <Button size="large" onClick={() => {
            console.log(answer2 === typedAnswer)
          }}>Submit</Button>
        </CardActions>
      </Card>
    );
  }

  if(props.question == 1) {
    return (
      <Card className={classes.root} alignItems={'center'}>
        <CardContent>
          <Typography
            align={'center'}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Question 1
          </Typography>
          <Typography align={'center'} variant="h2" component="h2">
            {"What is 2^12?"}
          </Typography>
          <br />
          <br />
          <Typography align={'center'} variant="body2" component="p">
            <TextField id="standard-basic" label="Standard" onChange={(e)=>{setTypedAnswer(e.target.value)}}/>
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
          <Button size="large" onClick={() => {
            console.log(answer1 === typedAnswer)
          }}>Submit</Button>
        </CardActions>
      </Card>
    );
  }
}

export default SimpleCard;

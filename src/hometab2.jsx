import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Accordion,Card,Button} from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(10),
  },
  main: {
    backgroundColor:'rgb(240,238,236)',
    marginBottom:'3vh',
  
  },
  space:{
    marginTop:'3vh',
  },
  facebook: {
    padding: theme.spacing(10),
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      <div className={classes.main} style={{marginTop:'3vh'}} >
        <Grid container spacing={2}
         alignItems="stretch"
         direction="row"
         justify="center">
         <Grid item xs={11} sm={7}>
          <Paper className={classes.paper} style={{marginBottom:"3vh",textAlign:"center"}}>Mission</Paper>
          <Paper className={classes.paper} style={{textAlign:"center"}}>Achievement
          
          <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

          </Paper>
        </Grid>
        <Grid item xs={11} sm={4}>
          <Paper className={classes.facebook} style={{textAlign:"center"}}>facebook</Paper>
        </Grid>
        </Grid>
        <Grid container className={classes.space}
        justify="center">
          <Grid item xs={11} sm={11}>
          <Paper className={classes.paper} style={{textAlign:"center"}}>Our patership</Paper>
          </Grid>
        </Grid>
      </div>
  );
}
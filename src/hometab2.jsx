import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
         justify="center"
          >
         <Grid item xs={12} sm={7}>
          <Paper className={classes.paper} style={{marginBottom:"3vh"}}>Mission</Paper>
          <Paper className={classes.paper}>Achievement</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.facebook}>facebook</Paper>
        </Grid>
        </Grid>
        <Grid container className={classes.space}
        justify="center">
          <Grid item xs={12} sm={11}>
          <Paper className={classes.paper}>Our patership</Paper>
          </Grid>
        </Grid>
        
      </div>
  );
}
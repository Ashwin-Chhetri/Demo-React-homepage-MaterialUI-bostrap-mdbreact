import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tab1 from './hometab1.jsx';
import Tab2 from './hometab2.jsx';

const styles = theme => ({
  paper: {
    maxWidth: '100%',
    margin: 'auto',
    overflow: 'hidden',
    backgroundColor:'rgb(240,238,236)',
  },
});

function Home(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <Tab1/>
      <Tab2/>
    </Paper>
    
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
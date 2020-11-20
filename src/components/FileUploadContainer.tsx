import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Paper} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4)
  }
}));

const FileUploadContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.container}>
      <Typography variant="h6" align="center" gutterBottom>
        Upload Files
      </Typography>
      <hr />
      Here be dragons
    </Paper>
  );
};

export default FileUploadContainer;

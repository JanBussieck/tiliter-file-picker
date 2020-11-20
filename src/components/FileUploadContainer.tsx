import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Paper, Grid} from '@material-ui/core';

import FileUploadDragAndDrop from './FileUploadDragAndDrop';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
  },
}));

const FileUploadContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.container}>
      <Typography variant="h6" align="center" gutterBottom>
        Upload Files
      </Typography>
      <hr />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}>
        <Grid item xs={12} md={6}>
          <FileUploadDragAndDrop />
        </Grid>
        <Grid item xs={12} md={6}>
          List of files
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileUploadContainer;

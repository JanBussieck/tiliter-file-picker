import React, {useState} from 'react';
import values from 'lodash/values';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Paper, Grid} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import FileUploadDragAndDrop from './FileUploadDragAndDrop';
import FileList from './FileList';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    opacity: '0.9',
  },
  separator: {
    marginBottom: theme.spacing(3),
  }
}));

const FileUploadContainer: React.FC = () => {
  const classes = useStyles();
  const [filesById, setFilesById] = useState({});

  const handleAddFile = ({file}: {file: File}) => {
    setFilesById((prevFiles) => {
      const fileId = uuid();
      return {
        ...prevFiles,
        [fileId]: {
          file,
          id: fileId
        }
      }
    });
  };

  return (
    <Paper elevation={3} className={classes.container}>
      <Typography variant="h6" align="center" gutterBottom>
        Upload Files
      </Typography>
      <hr className={classes.separator} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}>
        <Grid item xs={12}>
          <FileUploadDragAndDrop onAddFile={handleAddFile}/>
        </Grid>
        <Grid item xs={12}>
          <FileList files={values(filesById)} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileUploadContainer;

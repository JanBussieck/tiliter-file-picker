import React, {useState} from 'react';
import values from 'lodash/values';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Paper, Grid} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import FileUploadDragAndDrop from './FileUploadDragAndDrop';
import FileList from './FileList';
import upload from '../services/uploadService';

import type File from '../types/FileInterface';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
  },
  separator: {
    marginBottom: theme.spacing(3),
  }
}));

// export const FileContext = React.createContext({});
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

  const handleRemoveFile = ({file}: {file: File}) => {
    console.log('file', file);
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
        <Grid item xs={12} md={6}>
          <FileUploadDragAndDrop onAddFile={handleAddFile}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <FileList files={values(filesById)} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileUploadContainer;

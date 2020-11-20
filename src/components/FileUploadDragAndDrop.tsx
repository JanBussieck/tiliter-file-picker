import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Paper} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
  },
}));

const FileUploadContainer: React.FC = () => {
  const classes = useStyles();
  return <div>Upload Drag and Drop</div>;
};

export default FileUploadContainer;

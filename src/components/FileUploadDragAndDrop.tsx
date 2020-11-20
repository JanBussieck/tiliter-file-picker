import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Paper, colors} from '@material-ui/core';
import BackupOutlined from '@material-ui/icons/BackupOutlined';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    minHeight: '15rem',
    borderWidth: '3px',
    borderColor: colors.blueGrey[500],
    borderStyle: 'dashed',
    borderRadius: '5px',
    backgroundColor: colors.blueGrey[50],
    '&:hover': {
      borderColor: theme.palette.primary.main,
      backgroundColor: colors.blueGrey[100],
      '& icon': {
        color: theme.palette.primary.main
      }
    },
  },
  icon: {
    fontSize: '5rem',
    color: colors.blueGrey[500]
  }
}));

const FileUploadContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <BackupOutlined fontSize="large" className={classes.icon} />
      Click here -or- Drag files to upload
    </div>
  );
};

export default FileUploadContainer;

import React, {useRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {colors} from '@material-ui/core';
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
        color: theme.palette.primary.main,
      },
    },
  },
  icon: {
    fontSize: '5rem',
    color: colors.blueGrey[500],
  },
  fileInput: {
    visibility: 'hidden',
  },
}));

const FileUploadContainer: React.FC = () => {
  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragover] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragover(true);
    console.log('handle drag over');
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragover(true);
    console.log('handle drag over');
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragover(false);
    console.log('handle drag over');
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    console.log('handle drag end');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragover(false);
    console.log('handle drag drop');
  };

  const handleDropAreaClick = (event: React.MouseEvent) => {
    console.log('handle drop are click drop');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handle file input change');
  };

  return (
    <div
      className={classes.container}
      onClick={handleDropAreaClick}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>
      <BackupOutlined fontSize="large" className={classes.icon} />
      <div>
        {isDragOver
          ? 'Drop files to upload'
          : 'Click here -or- Drag files to upload'}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        name="file-upload-input"
        className={classes.fileInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default FileUploadContainer;

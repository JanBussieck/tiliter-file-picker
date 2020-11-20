import React, {useRef, useState} from 'react';
import get from 'lodash/get';
import {makeStyles} from '@material-ui/core/styles';
import {colors} from '@material-ui/core';
import BackupOutlined from '@material-ui/icons/BackupOutlined';

import type File from '../types/FileInterface';

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

interface FileUploadDragAndDropProps {
  maxSize?: number;
  onAddFile: ({file}: {file: File}) => void;
}

const FileUploadDragAndDrop: React.FC<FileUploadDragAndDropProps> = ({
  maxSize = 1024 * 1024 * 50, // default max 50MB
  onAddFile,
}) => {
  const classes = useStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragover] = useState(false);

  const isSizeAccepted = (file: File) => {
    return file.size <= maxSize;
  };

  const checkAndSelectFiles = (files: File[] = []) => {
    files.forEach(file => {
      if (!isSizeAccepted(file)) {
        /* eslint-disable no-alert */
        window.alert(`File ${file.name} is too large`);
        /* eslint-enable no-alert */
        return;
      }
      try {
        onAddFile({file});
      } catch (err) {
        // Nothing, restriction errors handled in Core
      }
    });
  };
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

    const files: File[] = Array.from(get(event, 'dataTransfer.files') || []);
    checkAndSelectFiles(files);
    console.log('handle drag drop');
  };

  const handleDropAreaClick = (event: React.MouseEvent) => {
    // Forward the click to the file input to open a file selection dialog
    const fileInputElem = fileInputRef.current;
    fileInputElem && fileInputElem.click();
    console.log('handle drop are click drop');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const files: File[] = Array.from(get(fileInputRef.current, 'files') || []);
    checkAndSelectFiles(files);
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
        multiple={true}
        name="file-upload-input"
        className={classes.fileInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default FileUploadDragAndDrop;

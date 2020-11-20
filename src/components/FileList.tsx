import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import FileItem from './FileItem';
import type File from '../types/FileInterface';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface FileListProps {
  files: Array<{id: number; file: File}>;
}

const FileList: React.FC<FileListProps> = ({files}) => {
  const classes = useStyles();

  return (
    <List className={classes.container}>
      {files.map(({file, id}) => {
        return <FileItem file={file} key={id} id={id} />;
      })}
    </List>
  );
};

export default FileList;

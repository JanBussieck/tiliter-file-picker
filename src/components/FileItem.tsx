import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
  Fab,
  colors,
} from '@material-ui/core';
import {YouTube, Description, Image, Check} from '@material-ui/icons';
import humanizeFileSize from '../utils/humanizeFileSize';
import upload from '../services/uploadService';

import type File from '../types/FileInterface';

const fetchIcon = (fileType: string) => {
  if (fileType.match(/^image.*/)) {
    return Image;
  }
  if (fileType.match(/^video.*/)) {
    return YouTube;
  }

  return Description;
};

const useStyles = makeStyles(theme => ({
  successButton: {
    backgroundColor: colors.green[500],
    color: 'white',
  },
}));

interface FileItemProps {
  file: File;
  id: string | number;
}

const FileItem: React.FC<FileItemProps> = ({file}) => {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [success, setSuccess] = React.useState(false);

  // start upload on component mount
  useEffect(() => {
    const cancel = upload({
      file,
      progress: progress => {
        setCompleted(progress);
      },
      success: ({file}) => {
        setSuccess(true);
        console.log('success');
      },
    });

    // useEffect clean up function will
    // cancel upload if component is unmounted
    return cancel;
  }, []);

  const IconComponent = fetchIcon(file.type);
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <IconComponent />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={file.name}
        secondary={humanizeFileSize(file.size)}
      />
      {success ? (
        <Fab size='small' className={classes.successButton}>
          <Check />
        </Fab>
      ) : (
        <CircularProgress variant="static" color="primary" value={completed} />
      )}
    </ListItem>
  );
};

export default FileItem;

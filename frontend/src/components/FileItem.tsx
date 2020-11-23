import React, {useEffect, useRef} from 'react';
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
import {YouTube, Description, Image, GetApp} from '@material-ui/icons';
import humanizeFileSize from '../utils/humanizeFileSize';
import upload from '../services/xhrUploadService';

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
    minWidth: '40px',
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
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    const downloadElem = downloadRef.current;
    downloadElem && downloadElem.click();
  };

  // start upload on component mount
  useEffect(() => {
    const cancel = upload({
      file,
      progress: progress => {
        setCompleted(progress);
      },
      success: ({file}) => {
        setSuccess(true);
        handleDownload();
      },
    });

    // useEffect clean up function will
    // cancel upload if component is unmounted
    return cancel;
  }, [file]);

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
        <Fab onClick={handleDownload} size='small' className={classes.successButton}>
          <GetApp />
        </Fab>
      ) : (
        <CircularProgress variant="static" color="primary" value={completed} />
      )}
      <a href={window.URL.createObjectURL(file)} download={file.name} ref={downloadRef} />
    </ListItem>
  );
};

export default FileItem;

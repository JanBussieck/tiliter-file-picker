import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import {YouTube, Description, Image} from '@material-ui/icons';
import humanizeFileSize from '../utils/humanizeFileSize';

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

interface FileItemProps {
  file: File;
  id: string | number;
}

const FileItem: React.FC<FileItemProps> = ({file}) => {
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
    </ListItem>
  );
};

export default FileItem;

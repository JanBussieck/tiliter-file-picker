import type File from './FileInterface';

type Success = ({file}: {file: File}) => void;
type Progress = (progress: number) => void;
type Cancel = () => void;

// For simplicity were are omitting error handling as well as pausing an resuming uploads
type FileUploader = ({
  file,
  success,
  progress
}: {
  file: File,
  success: Success,
  progress: Progress
}) => Cancel;

export default FileUploader;

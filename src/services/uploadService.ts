import type File from '../types/FileInterface';

type Success = ({file}: {file: File}) => void;
type Error = ({file, message}: {file: File, message: string}) => void;
type Progress = (progress: number) => void;
type Cancel = () => void;

// For simplicity were are omitting error handling as well as pausing an resuming uploads
export type FileUploader = ({
  file,
  success,
  progress
}: {
  file: File,
  success: Success,
  progress: Progress
}) => Cancel;


// simulate file upload
const upload: FileUploader = ({
  file,
  success,
  progress,
}) => {
  const intervalSize = 100;
  const stepSize = 1024 * 10;
  let currentProgress = 0
  const timer = setInterval(() => {
    currentProgress += stepSize;

    progress((currentProgress / (file.size | intervalSize) * 100));
    if (currentProgress > file.size) {
      clearInterval(timer);
      success({file});
    }
  }, intervalSize);

  return () => {
    clearInterval(timer);
  }
}

export default upload;

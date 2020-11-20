import type File from '../types/FileInterface';

type Success = ({file}: {file: File}) => void;
type Error = ({file, message}: {file: File, message: string}) => void;
type Progress = (progress: number) => void;
type Cancel = () => void;

export type FileUploader = ({
  file,
  success,
  error,
  progress
}: {
  file: File,
  success: Success,
  error: Error,
  progress: Progress
}) => Cancel;


// simulate file upload
const upload: FileUploader = ({
  file,
  success,
  error,
  progress,
}) => {
  const intervalSize = 100;
  const stepCount = file.size / 100;
  let currentProgress = 0
  const timer = setInterval(() => {
    currentProgress += 100;

    progress((intervalSize / (file.size | intervalSize) * 100));
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

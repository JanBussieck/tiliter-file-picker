// simulate file upload
import FileUploaderInterface from '../types/FileUploaderInterface';

const upload: FileUploaderInterface = ({
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

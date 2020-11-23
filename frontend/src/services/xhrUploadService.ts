import FileUploaderInterface from '../types/FileUploaderInterface';

const upload: FileUploaderInterface = ({
  file,
  success,
  progress,
}) => {
  // Create the request body
  const formData = new FormData();
  // Add the file
  formData.append('file', file);

  // Create the request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/upload');

  // Add event handlers
  xhr.onload = () => {
    if (xhr.status === 200) {
      success({file});
    }
  };

  xhr.upload.onprogress = (e) => {
    if (e.lengthComputable) {
      const percentComplete = Math.round(e.loaded * 100 / e.total);
      progress(percentComplete);
    }
  };

  // Engage!
  xhr.send(formData);

  return xhr.abort;
}

export default upload;

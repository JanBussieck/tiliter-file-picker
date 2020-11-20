const humanizeFileSize = (size: number): string => {
  const index = Math.floor(Math.log(size) / Math.log(1024));
  const numerical = (size / Math.pow(1024, index)).toFixed(2);
  const unit = ['B', 'kB', 'MB', 'GB', 'TB'][index];
  return `${numerical} ${unit}`;
};

export default humanizeFileSize;

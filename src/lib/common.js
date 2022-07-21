const errorDebug = (error) => {
  if (!error) return 'Error';
  const errorData = (error.response || {}).data;
  return errorData ? `Error ${errorData.code || ''} - ${errorData.message || ''}` : 'Error';
};

export default errorDebug;

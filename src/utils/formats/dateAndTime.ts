export const dateFormat = (date: string): string => {
  
  const dateFormatted = new Date(date);
  console.log("data formnate", dateFormatted.toISOString());
  
  const year = dateFormatted.getUTCFullYear();
  const month = (dateFormatted.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = dateFormatted.getUTCDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const TimeFormat = (date: string) => {
  const dateFormatted = new Date(date);
  const hour = (dateFormatted.getUTCHours()).toString().padStart(2, '0');
  const minutes = dateFormatted.getUTCMinutes().toString().padStart(2, '0');
 
  return `${hour}:${minutes}`;
}

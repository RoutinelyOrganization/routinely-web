export const dateFormat = (date: string): string => {
  const dateFormatted = new Date(date);
  
  const year = dateFormatted.getFullYear();
  const month = (dateFormatted.getMonth() + 1).toString().padStart(2, '0');
  const day = dateFormatted.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const TimeFormat = (date: string) => {
  const dateFormatted = new Date(date);
  const hour = (dateFormatted.getUTCHours()).toString().padStart(2, '0');
  const minutes = dateFormatted.getUTCMinutes().toString().padStart(2, '0');
  console.log(`${hour}:${minutes}`);
  
  return `${hour}:${minutes}`;
}

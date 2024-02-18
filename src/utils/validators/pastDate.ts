export function pastDate(date: Date) {
  const dateFormatted = new Date(date);
  const today = new Date();
  console.log(dateFormatted, today);
  
  if ( +dateFormatted < +today) {
    return false
  }
  return true
}
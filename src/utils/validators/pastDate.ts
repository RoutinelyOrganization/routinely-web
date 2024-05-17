export function pastDate(date: Date | string) {
  
  const dateFormatted = new Date(date);
  const today = new Date();
  
  if ( +dateFormatted < +today) {
    return false
  }
  return true
}
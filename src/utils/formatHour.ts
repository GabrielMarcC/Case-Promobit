export const formatHour = (hour: number) => {
  const minutes = hour;
  const hours = Math.floor(minutes / 60);
  const minutesLeft = Math.floor(minutes % 60);
  const formatHour = `${hours}h${minutesLeft}m`;

  return formatHour;
};
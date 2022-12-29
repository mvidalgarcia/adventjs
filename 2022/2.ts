export function countHours(year: number, holidays: string[]) {
  const HOURS_PER_DAY = 2;

  function isWeekend(date: Date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  return (
    holidays.filter((holiday) => !isWeekend(new Date(`${holiday}/${year}`)))
      .length * HOURS_PER_DAY
  );
}

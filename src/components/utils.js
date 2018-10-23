
const NUMBER_OF_DAYS_IN_WEEK = 7;

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const addMonths = (date, months) => {
  var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

const getFirstDayOfCalendarMonth = date => {
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayNumber = firstDay.getDay();

  // If Monday, return
  if (dayNumber === 1) return firstDay;

  // If Sunday - 6
  if (dayNumber === 0) return addDays(firstDay, -6);

  // Otherwise day number -1
  // e.g. weds (day 3) needs to take away 2 days to get to mon (3 - 1 = 2)
  return addDays(firstDay, -(dayNumber - 1));
};

const getWeeksInMonth = date => {
  const firstCalendarDate = getFirstDayOfCalendarMonth(date);
  const weekStarts = [];
  const isChangeOver =
    addDays(firstCalendarDate, 6).getMonth() !== firstCalendarDate.getMonth();

  weekStarts.push({ date: firstCalendarDate, isChangeOver });
  let loopDate = addDays(firstCalendarDate, 7);
  const month = loopDate.getMonth();

  while (loopDate.getMonth() === month) {
    if (addDays(loopDate, 6).getMonth() === month) {
      weekStarts.push({ date: loopDate, isChangeOver: false });
    }

    loopDate = addDays(loopDate, NUMBER_OF_DAYS_IN_WEEK);
  }
  return weekStarts;
};

const getWeekDays = startOfWeek => {
  const days = [];
  let i = 0;

  while (i < NUMBER_OF_DAYS_IN_WEEK) {
    days.push(addDays(startOfWeek, i));
    i += 1;
  }

  return days;
};

const getMonthName = (date, locale = "en-GB") => {
  return date.toLocaleString(locale, { month: "short" });
};

function isLastDay(dt) {
  var test = new Date(dt.getTime());
  test.setDate(test.getDate() + 1);
  return test.getDate() === 1;
}

export {
  addDays,
  addMonths,
  getFirstDayOfCalendarMonth,
  getWeeksInMonth,
  isLastDay,
  getWeekDays,
  getMonthName
}
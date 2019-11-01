// helper function for calendar slightly modified from Glad Chinda's tutorial

export const thisYear = () => +new Date().getFullYear();
export const thisMonth = () => +new Date().getMonth() + 1;

export const WEEK_DAY_LABEL = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
  Sunday: 'Sun',
};

export const MONTH_LABEL = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
};

export const CALENDAR_WEEKS = 6;

export const monthName = month => {
  return Object.keys(MONTH_LABEL)[Math.max(0, Math.min(month - 1, 11))];
};

export const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0');
};

export const numOfDays = (month, year) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;

  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
    ? 30
    : 31;
};

export const firstDayOfMonth = (month, year) => {
  return +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;
};

export const isDate = date => {
  const isDate = Object.prototype.toString.call(date) === '[object Date]';
  const isValidDate = date && !Number.isNaN(date.valueOf());

  return isDate && isValidDate;
};

export const isSameMonth = (date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();

  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();

  return +basedateMonth === +dateMonth && +basedateYear === +dateYear;
};

export const isSameDay = (date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  return (
    +basedate.getDate() === +date.getDate() &&
    +basedate.getMonth() === +date.getMonth() &&
    +basedate.getFullYear() === +date.getFullYear()
  );
};

export const getDateISO = (date = new Date()) => {
  if (!isDate(date)) return null;

  return [
    date.getFullYear(),
    zeroPad(+date.getMonth() + 1, 2),
    zeroPad(+date.getDate(), 2),
  ].join('-');
};

export const getPreviousMonth = ([year, month]) => {
  const m = month > 1 ? month - 1 : 12;
  const y = month > 1 ? year : year - 1;

  return [y, m];
};

export const getNextMonth = ([year, month]) => {
  const m = month < 12 ? month + 1 : 1;
  const y = month < 12 ? year : year + 1;

  return [y, m];
};

/*
    DateObj is a [year,month,day] structure where
    month: 1-12
    day: 1-31
*/

export const dateToDateObj = date => [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
];

export const dateObjToString = dateObj =>
  dateObj.map(n => zeroPad(n, 2)).join('-');

export const stringToDateObj = dateString => dateString.split('-').map(d => +d);

export const isDateObjEqual = (d1, d2) =>
  d1 && d2 && d1[0] === d2[0] && d1[1] === d2[1] && d1[2] === d2[2];

export const isDateObjAfter = (d1, d2) => Date.parse(d1) > Date.parse(d2);

export const dateObjsInRange = (d1, d2) => {
  var ds, de;
  if (isDateObjAfter(d1, d2)) {
    ds = new Date(d2);
    de = new Date(d1);
  } else {
    ds = new Date(d1);
    de = new Date(d2);
  }
  for (var range = [], dt = ds; dt <= de; dt.setDate(dt.getDate() + 1)) {
    range.push(dateToDateObj(dt));
  }

  return range;
};

const calendar = ([year, month]) => {
  // Get number of days in the month and the month's first day
  const _numOfDays = numOfDays(month, year);
  const _firstDayOfMonth = firstDayOfMonth(month, year);

  // Get number of days to be displayed from previous and next months
  // These ensure a total of 42 days (6 weeks) displayed on the calendar

  const daysFromPrevMonth = _firstDayOfMonth - 1;
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + _numOfDays);

  // Get the previous and next months and years
  const [prevMonthYear, prevMonth] = getPreviousMonth([year, month]);

  const [nextMonthYear, nextMonth] = getNextMonth([year, month]);

  // Get number of days in previous month
  const prev_numOfDays = numOfDays(prevMonth, prevMonthYear);

  // Builds dates to be displayed from previous month

  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prev_numOfDays - daysFromPrevMonth);
    return [prevMonthYear, prevMonth, day];
  });

  // Builds dates to be displayed from current month

  const thisMonthDates = [...new Array(_numOfDays)].map((n, index) => {
    const day = index + 1;
    return [year, month, day];
  });

  // Builds dates to be displayed from next month

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, nextMonth, day];
  });

  // Combines all dates from previous, current and next months
  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};

export default calendar;

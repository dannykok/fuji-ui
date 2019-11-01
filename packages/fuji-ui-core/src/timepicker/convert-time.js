// convert 12h string to time array format
export const timeFromString = timeStr => {
  const [time, apm] = timeStr.trim().split(' ');
  const [hour, min] = time.split(':');
  return apm && hour && min ? [hour, min, apm.toLowerCase()] : [];
};

// convert time array format to 12h string
export const timeToString = time => {
  const [hour, min, apm] = time;
  return apm && hour && min ? `${hour}:${min} ${apm.toLowerCase()}` : '';
};

export const is12HFormat = timeStr =>
  /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/.test(timeStr);
export const is24HFormat = timeStr =>
  /^(([01][0-9])|(2[0-3])):[0-5][0-9]$/.test(timeStr);

export const convertTimeTo12H = timeStr => {
  // e.g. 17:10 to 5:10 pm
  if (is24HFormat(timeStr)) {
    const [hour, min] = timeStr.trim().split(':');
    const apm = +hour < 12 ? 'am' : 'pm';
    const apmHour = +hour % 12 || 12;
    return `${apmHour}:${min} ${apm}`;
  }
  return timeStr;
};

export const convertTimeTo24H = timeStr => {
  // e.g. 5:10 pm to 17:10
  if (is12HFormat(timeStr)) {
    let [hour, min, apm] = timeFromString(timeStr);
    if (hour === '12') hour = '00';
    if (apm === 'pm') hour = (Number(hour) + 12).toString();
    return `${hour.padStart(2, '0')}:${min}`;
  }
  return timeStr;
};

export const convertTimestampToHourMin = (timestamp, use24h = false) => {
  if (timestamp) {
    const d = new Date(+timestamp);
    const f24h = `${d
      .getHours()
      .toString()
      .padStart(2, '0')}:${d
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
    return use24h ? f24h : convertTimeTo12H(f24h);
  } else return null;
};

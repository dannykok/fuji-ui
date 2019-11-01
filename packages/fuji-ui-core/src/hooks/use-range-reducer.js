import { useState } from 'react';

// collect range data (e.g. dates, count or anthing in range) and sort to a given bounds

export const useRangeReducer = (defaultState = [], bounds = 2) => {
  const [rangeData, setRangeData] = useState(defaultState);
  const addData = data => {
    const _data = Array.isArray(data) ? data : [data];
    const newData = [..._data, ...rangeData].splice(0, bounds);
    setRangeData(newData);

    return newData;
  };

  return [[...rangeData].sort(), addData];
};

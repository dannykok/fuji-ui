// hooks that listen to global windows event on mount/unmount with given handler(cb)
// Note: use useCallBack() for the callback function if necessary

import { useEffect } from 'react';

export const useWindowEventListener = (event, callback, options) => {
  useEffect(() => {
    window.addEventListener(event, callback, options);
    return () => window.removeEventListener(event, callback, options);
  }, [event, callback, options]);
};

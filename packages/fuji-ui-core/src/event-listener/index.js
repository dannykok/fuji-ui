import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useWindowEventListener } from '../hooks';

const EventListener = props => {
  const { event, handler, options } = props;
  const cb = useCallback(handler, []);
  useWindowEventListener(event, cb, options);
  return props.children;
};

EventListener.propTypes = {
  event: PropTypes.string.isRequired,
  options: PropTypes.any,
  handler: PropTypes.func.isRequired,
};

export { EventListener };

import { variant, system, get, layout as SSLayout } from 'styled-system';
import PropTypes from 'prop-types';

// custom style props for all input size e.g. button, text input, dropdown
export const inputSizes = variant({
  prop: 'size', // accept 'size' as props to define the size of button
  key: 'inputSizes', // corresponding key in theme spec
});

inputSizes.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

// custom style props for animation (transition)
export const transitions = variant({
  prop: 'transitions',
  key: 'transitions',
});

// custom style props for layout, inherit from styled system
// remove the size keys to avoid conflict with inputSizes props
const isNumber = n => typeof n === 'number' && !isNaN(n);
const getWidth = (n, scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');

export const layout = system({
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
});

layout.propTypes = SSLayout.propTypes;

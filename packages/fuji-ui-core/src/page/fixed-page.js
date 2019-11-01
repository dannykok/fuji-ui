import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';

const FixedPage = props => {
  const { minWidth, maxWidth, color, bg } = props;
  var _props = {
    mx: 'auto',
    px: ['s', 'm', 'l', null],
    minWidth,
  };
  if (maxWidth) _props = { ...props, maxWidth: [null, null, null, maxWidth] };
  return (
    <Box
      position="relative"
      role="page"
      flex={1}
      pt="l"
      pb="l"
      overflowY="auto"
      height="100%"
      color={color}
      bg={bg}
    >
      <Box {..._props}>{props.children}</Box>
    </Box>
  );
};

FixedPage.propTypes = {
  children: PropTypes.node,
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  bg: PropTypes.string,
};

FixedPage.defaultProps = {
  color: 'onBackground',
  bg: 'background',
};

export { FixedPage };

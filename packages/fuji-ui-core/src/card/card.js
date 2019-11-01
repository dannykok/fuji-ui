import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';

const Card = props => {
  const { header, contentSpace, shadow } = props;
  const r = 4;
  return (
    <Box
      borderRadius={r}
      boxShadow={shadow}
      display="inline-block"
      backgroundColor="surface"
      color="onSurface"
      {...props}
    >
      {header && (
        <Box borderTopLeftRadius={r} borderTopRightRadius={r} overflow="hidden">
          {header()}
        </Box>
      )}
      {props.children && (
        <Box p={contentSpace} height="100%">
          {props.children}
        </Box>
      )}
    </Box>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  ...Box.propTypes,
  header: PropTypes.func,
  contentSpace: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
    PropTypes.number,
  ]),
  shadow: PropTypes.string,
};

Card.defaultProps = {
  contentSpace: 'm',
  shadow: 'large',
};

export { Card };

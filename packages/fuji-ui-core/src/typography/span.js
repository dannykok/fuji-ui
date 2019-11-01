import React from 'react';
import { Box } from '../box';
import { Skeleton } from '../skeleton';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Span = props => (
  <Box as="span" {...props}>
    {props.children}
  </Box>
);

Span.displayName = 'Span';
Span.skeleton = styled(Box)`
  ${Skeleton.style}
`;

Span.propTypes = {
  children: PropTypes.node,
};

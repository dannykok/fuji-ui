import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../box';
import { themeGet } from '@styled-system/theme-get';

const NoteWrapper = styled(Box)`
  border-radius: ${themeGet('radii.s', '4px')};
  border-style: solid;
  border-color: ${themeGet('colors.secondaryDarkVariant', 'blue')};
  border-width: ${themeGet('borderWidth.surface', '1px')};
  background-color: white;
  margin-top: ${themeGet('space.l', '1rem')};
  padding: ${themeGet('space.m', '8px')};
`;

const NoteBlock = props => {
  return <NoteWrapper {...props}>{props.children}</NoteWrapper>;
};

NoteBlock.propTypes = {
  ...Box.propTypes,
  children: PropTypes.node,
};

export { NoteBlock };

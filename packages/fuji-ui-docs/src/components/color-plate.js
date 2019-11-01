import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography as T } from '@fuji-ui/core';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ColorPlateStyle = styled(Box)`
  &:not(:first-child) {
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    border-color: ${themeGet('colors.border', '#rgba(0,0,0,0.3)')};
  }
`;

const ColorPlate = ({ codeKey, bgCode, textCode, displayCode }) => {
  if (!displayCode) displayCode = bgCode;
  return (
    <ColorPlateStyle flex={1} bg={bgCode} color={textCode} p="s">
      <T.H5>{codeKey}</T.H5>
      <T.Subtitle2>{displayCode.toUpperCase()}</T.Subtitle2>
    </ColorPlateStyle>
  );
};

ColorPlate.propTypes = {
  children: PropTypes.node,
};

export default ColorPlate;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { typography } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animate = keyframes`
  0%,100% {
    stroke-dashoffset: 2.0em;
  }
  50% {
    stroke-dashoffset: 0;
  }
  50.1% {
    stroke-dashoffset: 4.0em;
  }
`;

const SpinnerWrapper = styled.svg`
  position: relative;
  width: 1em;
  height: 1em;
  animation: ${rotate} 2s linear infinite;
  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 2;
    stroke: ${({ color }) => themeGet(`colors.${color}`, color)};
    stroke-linecap: round;
    stroke-dasharray: 2em;
    stroke-dashoffset: 2em;
    transform: translate3d(0, 0, 0) translate(0.1em, 0.1em);
    animation: ${animate} 4s linear infinite;
  }
  ${typography}
`;

const Spinner = ({ color, fontSize }) => {
  return (
    <SpinnerWrapper color={color} fontSize={fontSize}>
      <circle cx="0.4em" cy="0.4em" r="0.4em" />
    </SpinnerWrapper>
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

Spinner.defaultProps = {
  color: 'currentColor',
};

export { Spinner };

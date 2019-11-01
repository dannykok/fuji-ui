import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buttonStyle } from 'styled-system';
import { Box } from '../box';
import { Skeleton } from '../skeleton';
import { Spinner } from '../spinner';
import { usePropsFilter } from '../hooks/use-props-filter';
import { themeGet } from '@styled-system/theme-get';
import is, { isNot } from 'styled-is';

// custom style props for all input size e.g. button, text input, dropdown
// example:
// const buttonSize = variant({
//   prop: 'size', // accept 'size' as props to define the size of button
//   key: 'buttonSizes', // corresponding key in theme spec
// });
import { inputSizes } from '@fuji-ui/theme';

// base button style
const ButtonBaseStyle = styled(Box)`
  position: relative;
  display: inline-flex;
  min-width: fit-content;
  ${'' /* setting max-width for animating width */}
  ${'' /* max-width: ${props => props.maxWidth || '5rem'}; */}
  white-space: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: none !important;
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-weight: 600;
  border-radius: ${themeGet('radii.m', '4px')};
  padding: 0 ${themeGet('space.s', '8px')};
  transition: ${themeGet('transitions.button', 'none')};
  user-select: none;
  ${props =>
    is('circle')`
      display: flex;
      width: ${themeGet(`inputSizes.${props.size}.minHeight`)};
      min-width: 0;
      border-radius: 50%;
    `}
  > span {
    align-self: center;
    align-items: baseline;
    flex-wrap: nowrap;
    margin: 0 ${themeGet('space.xs', '4px')};
  }

  ${is('isLoading')`
    padding-right: 2.5em;
  `}
  ${isNot('isLoading')`
    :disabled {
      background-color: #eeeeee;
      color: #666;
      opacity: 0.5;
      &:hover {
        background-color: #eeeeee !important;
        opacity: 0.5 !important;
      }
      .spinner,
      .spinner::before,
      .spinner::after {
        background-color: #eeeeee;
      }
    }
  `}
  ${buttonStyle}
  ${inputSizes}
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: auto;
  right: 1.25em;
  margin: -0.5em;
  z-index: ${({ isLoading }) => (isLoading ? '10' : '-1')};
  visibility: ${({ isLoading }) => (isLoading ? 'visible' : 'hidden')};
  opacity: ${({ isLoading }) => (isLoading ? '1' : '0')};
  transition: opacity 0.3s;
  &::before {
    content: ' ';
    width: 1em;
    height: 1em;
    transform-origin: 0 0;
    transform: translateZ(0) scale(0.5);
    backface-visibility: hidden;
  }
`;

const Button = props => {
  const { variant, type, size, circle, isLoading, disabled, onClick } = props;
  const boxProps = usePropsFilter(props, Box.propTypes);
  return (
    <ButtonBaseStyle
      as="button"
      {...boxProps}
      type={type}
      circle={circle}
      disabled={disabled || isLoading}
      onClick={onClick}
      isLoading={isLoading}
      variant={variant}
      size={size}
    >
      <span>{props.children}</span>
      <SpinnerWrapper isLoading={isLoading}>
        <Spinner className="spinner" />
      </SpinnerWrapper>
    </ButtonBaseStyle>
  );
};

Button.displayName = 'Button';

Button.skeleton = props => <Skeleton width="96px" height="2rem" {...props} />; // eslint-disable-line

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'plain', 'icon']),
  circle: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  size: 'm',
  variant: 'primary',
  type: 'button',
  isLoading: false,
};

export { Button };

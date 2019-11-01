import React from 'react';
import { Box } from '../box';
import { usePropsFilter } from '../hooks';

import PropTypes from 'prop-types';
import { inputSizes } from '@fuji-ui/theme';
import styled from 'styled-components';
import is from 'styled-is';
import { themeGet } from '@styled-system/theme-get';
import { placeHolderStyle } from '../text-input/placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SelectionBoxWrapper = styled(Box).attrs({ tabIndex: 0 })`
  min-width: 120px;
  width: ${props => props.width || '100%'};
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: ${themeGet('colors.onInput', '#000000')};
  border-style: solid;
  border-width: ${themeGet('borderWidths.input', '1px')};
  border-color: ${themeGet('colors.border', '#000000')};
  border-radius: ${themeGet('radii.m', '4px')};
  background-color: ${themeGet('colors.input', '#FFFFFF')};
  padding: 2px ${themeGet('space.s', '2px')};
  font: inherit;
  cursor: pointer;
  user-select: none;
  &:hover,
  &:focus {
    border-color: ${themeGet('colors.primary', 'inherit')};
  }
  ${is('error')`
    border-color: ${themeGet('colors.error', 'red')};
  `}
  ${is('disabled')`
    cursor: not-allowed;
    border-color: transparent !important;
  `}
  ${inputSizes}
  .placeholder {
    ${placeHolderStyle}
  }
`;

const MultiSelectionBoxWrapper = styled(SelectionBoxWrapper)`
  padding: 1px ${themeGet('space.s')} 1px ${themeGet('space.xs')};
`;

const Caret = styled.span.attrs(['aria-hidden'])`
  margin-left: 0.6rem;
  opacity: 0.8;
  > svg {
    padding-top: 2px;
    transition: transform 0.1s;
  }
`;

const SelectionBox = React.forwardRef((props, ref) => {
  const {
    opened,
    hideCaret,
    onFocus,
    onBlur,
    multiple,
    disabled,
    error,
  } = props;
  const propsForWrapper = usePropsFilter(props, {
    ...Box.propTypes,
    ...inputSizes.propTypes,
  });

  const Wrapper = multiple ? MultiSelectionBoxWrapper : SelectionBoxWrapper;

  return (
    <Wrapper
      {...propsForWrapper}
      ref={ref}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      error={error}
    >
      {props.children}
      {!hideCaret && (
        <Caret aria-hidden>
          <FontAwesomeIcon
            icon={faAngleDown}
            rotation={opened ? 180 : undefined}
          />
        </Caret>
      )}
    </Wrapper>
  );
});

SelectionBox.propTypes = {
  opened: PropTypes.bool,
  hideCaret: PropTypes.bool,
  children: PropTypes.node,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

export default SelectionBox;

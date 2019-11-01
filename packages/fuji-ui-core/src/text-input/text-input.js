import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import is, { isNot } from 'styled-is';
import { Flex } from '../flex';
import { usePropsFilter } from '../hooks/use-props-filter';
import { useCombinedRefs } from '../hooks/use-combined-refs';
import { Skeleton } from '../skeleton';
import { borderRadius } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { inputSizes } from '@fuji-ui/theme';
import { FocusWithin } from 'react-focus-within';
import Icon, { ICON_WIDTH } from './icon';
import { placeHolderStyle } from './placeholder';
import { usePropsExclude } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// base text input component style
const TextInputBaseStyle = styled(Flex)`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  position: relative;
  pointer-events: auto;
  align-items: center;
  color: ${themeGet('colors.onInput', '#000000')};
  border-style: solid;
  border-width: ${themeGet('borderWidths.input', '1px')};
  border-color: ${themeGet('colors.border', '#000000')};
  border-radius: ${themeGet('radii.m', '4px')};
  background-color: ${themeGet('colors.input', '#FFFFFF')};
  &:hover {
    ${isNot('disabled')`
      border-color: ${themeGet('colors.primary', 'blue')};
    `};
  }
  ${is('focused')`
    border-color: ${themeGet('colors.primary', 'blue')};
  `}
  ${is('disabled')`
    cursor: not-allowed;
    border-color: transparent;
  `}
  ${is('error')`
    border-color: ${themeGet('colors.error', 'red')};
  `}
  > * {
    transition: ${themeGet('transitions.input', 'none')};
  }
  > input, textarea {
    flex: 1;
    width: 100%;
    outline: none !important;
    border-style: none;
    background-color: transparent;
    padding: 0 ${themeGet('space.s', '2px')};
    font: inherit;
    /* for styled-component, separate : with :: */
    ::placeholder,
    ::-webkit-input-placeholder {
      ${placeHolderStyle}
    }
    :-ms-input-placeholder {
      ${placeHolderStyle}
    }
    &:disabled {
      cursor: not-allowed;
    }
    ${is('icon')`
      &:first-of-type {
        padding-left: ${ICON_WIDTH};
      }
    `}
  }
  > textarea {
    padding: ${themeGet('space.s')} ${themeGet('space.s')};
    min-height: ${props => props.multiline?.min || '110px'};
    max-height: ${props => props.multiline?.max || 'auto'};
  }
  ${Icon} {
    pointer-events: none;
  }

  ${inputSizes}
  ${borderRadius}
`;

const ClearButton = styled.button`
  padding: 0;
  color: #c7c7c7;
  font-size: inherit;
  &:hover {
    color: #a9a9a9;
  }
  padding: 4px 12px;
`;

const inputProps = [
  'id',
  'placeholder',
  'disabled',
  'type',
  'value',
  'defaultValue',
];

const TextInput = React.forwardRef((props, ref) => {
  const {
    multiline,
    icon,
    onFocus,
    onBlur,
    name,
    onChange,
    clearable,
    autoFocus,
    spellCheck,
  } = props;
  const _ref = useRef();
  const _combinedRef = useCombinedRefs(ref, _ref);
  const propsForWrapper = {
    ...usePropsExclude(props, [
      ...inputProps,
      'onChange',
      'autoFocus',
      'spellCheck',
    ]),
    disabled: props.disabled,
    error: props.error,
  };
  const propsForInput = usePropsFilter(props, inputProps);
  const [showClearButton, setShowClearButton] = useState(false);
  // separately handle autocomplete on/off
  const autoComplete = props.autoComplete ? 'on' : 'off';

  const handleChange = e => {
    const ele = e.target;
    const { value } = e.target;
    if (clearable) {
      setShowClearButton(value !== '');
    }
    if (multiline) {
      ele.style.height = 'auto';
      ele.style.height = ele.scrollHeight + 'px';
    }
    if (onChange) onChange(value);
  };

  const handleClear = () => {
    const value = '';
    _combinedRef.current.value = value;
    _combinedRef.current.focus();
    setShowClearButton(false);
    if (onChange) onChange(value);
  };

  return (
    <FocusWithin onFocus={onFocus} onBlur={onBlur}>
      {({ focusProps, isFocused }) => (
        <TextInputBaseStyle
          {...propsForWrapper}
          {...focusProps}
          focused={isFocused}
        >
          {icon && <Icon>{icon}</Icon>}

          {multiline ? (
            <textarea
              ref={_combinedRef}
              name={name}
              {...propsForInput}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              spellCheck={spellCheck}
              onChange={handleChange}
            />
          ) : (
            <input
              ref={_combinedRef}
              name={name}
              {...propsForInput}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              onChange={handleChange}
            />
          )}
          {showClearButton && (
            <ClearButton onClick={handleClear}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </ClearButton>
          )}
        </TextInputBaseStyle>
      )}
    </FocusWithin>
  );
});

TextInput.displayName = 'TextInput';

TextInput.skeleton = styled(TextInputBaseStyle)`
  ${Skeleton.style}
  border: 0;
  width: 14rem;
  color: transparent;
  &::before {
    content: 'a';
  }
`;

TextInput.propTypes = {
  inline: PropTypes.bool,
  multiline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      min: PropTypes.string, // e.g. 100px
      max: PropTypes.string,
    }),
  ]),
  size: PropTypes.oneOf(['s', 'm', 'l']),
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  id: PropTypes.string, // id of the <input>
  name: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  spellCheck: PropTypes.bool,
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  defaultValue: PropTypes.string,
};

TextInput.defaultProps = {
  size: 'm',
  type: 'text',
  clearable: false,
};

export { TextInputBaseStyle, TextInput };

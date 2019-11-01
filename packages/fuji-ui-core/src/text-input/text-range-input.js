import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FocusWithin } from 'react-focus-within';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { TextInputBaseStyle, TextInput } from './text-input';
import { Flex } from '../flex';
import { usePropsFilter } from '../hooks/use-props-filter';
import Icon from './icon';

const TextRangeInputStyle = styled(TextInputBaseStyle)`
  input {
    text-align: center;
  }
`;

const TextRangeInput = React.forwardRef((props, ref) => {
  const [ref1, ref2] = ref || [];
  const {
    icon,
    type,
    placeholder = [],
    disabled = [],
    name = [],
    value = [],
    error,
    onFocus,
    onBlur,
  } = props;

  const [ph1, ph2] = placeholder;
  const [disabled1, disabled2] = disabled;
  const [n1, n2] = name;
  const [value1, value2] = value;
  const autoComplete = props.autoComplete ? 'on' : 'off';
  const flexProps = usePropsFilter(props, Flex.propTypes);

  return (
    <FocusWithin onFocus={onFocus} onBlur={onBlur}>
      {({ focusProps, isFocused }) => (
        <TextRangeInputStyle
          icon={icon}
          {...flexProps}
          {...focusProps}
          focused={isFocused}
          error={error}
        >
          {icon && <Icon>{icon}</Icon>}
          <input
            ref={ref1}
            type={type}
            placeholder={ph1}
            disabled={disabled1}
            name={n1}
            value={value1}
            autoComplete={autoComplete}
          />
          <FontAwesomeIcon icon={faAngleDoubleRight} color="#C9C9C9" />
          <input
            ref={ref2}
            type={type}
            placeholder={ph2}
            disabled={disabled2}
            name={n2}
            value={value2}
            autoComplete={autoComplete}
          />
        </TextRangeInputStyle>
      )}
    </FocusWithin>
  );
});

TextRangeInput.displayName = 'TextRangeInput';

TextRangeInput.propTypes = {
  ...TextInput.propTypes,
  placeholder: PropTypes.array,
  disabled: PropTypes.array,
  error: PropTypes.bool,
  name: PropTypes.array,
  value: PropTypes.array,
  autoComplete: PropTypes.bool,
};

TextRangeInput.defaultProps = {
  ...TextInput.defaultProps,
};

export { TextRangeInput };

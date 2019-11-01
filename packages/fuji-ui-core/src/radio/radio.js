import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../box';
import { usePropsFilter } from '../hooks';
import { themeGet } from '@styled-system/theme-get';
import { inputSizes } from '@fuji-ui/theme';
import is from 'styled-is';

const radioSizeMap = {
  s: '16px',
  m: '18px',
  l: '20px',
};

const Text = styled.span`
  margin-left: ${themeGet('space.s', '0.5rem')};
`;

const RadioNative = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Dot = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  border-radius: 50%;
  background-color: ${themeGet('colors.primary', 'blue')};
`;

const RadioDisplayed = styled(Box)`
  position: relative;
  display: inline-block;
  top: 2px;
  width: 16px;
  height: 16px;
  background: ${themeGet('colors.secondary', 'white')};
  border-radius: 50%;
  vertical-align: middle;
  transition: all 0.2s;
  ${Dot} {
    visibility: hidden;
  }
  ${RadioNative}:focus + & {
    box-shadow: 0 0 0 2px
      ${themeGet('colors.primaryLightVariant', 'transparent')};
  }
  ${RadioNative}:checked + & {
    ${Dot} {
      visibility: visible;
    }
  }
`;

const RadioWrapper = styled(Box)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  line-height: unset;
  ${RadioDisplayed} {
    width: ${props => radioSizeMap[props.size]};
    height: ${props => radioSizeMap[props.size]};
  }
  ${is('disabled')`
    ${RadioDisplayed}, ${Text} {
        opacity: 0.4;
    }
  `}
  ${inputSizes}
`;

const Radio = React.forwardRef((props, ref) => {
  const {
    name,
    value,
    onChange,
    checked,
    defaultChecked,
    disabled,
    children,
  } = props;
  // const [checked, setChecked] = useState(defaultChecked);

  const onCheck = event => {
    if (onChange) onChange(event.target.checked, event);
  };

  return (
    <RadioWrapper
      as="label"
      disabled={disabled}
      {...usePropsFilter(props, Box.propTypes)}
    >
      {/* label element to catch click event */}
      <RadioNative
        ref={ref}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onCheck}
        disabled={disabled}
      />
      <RadioDisplayed>
        <Dot />
      </RadioDisplayed>
      {children && <Text>{children}</Text>}
    </RadioWrapper>
  );
});

Radio.displayName = 'Radio';

Radio.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  disabled: false,
};

export { Radio };

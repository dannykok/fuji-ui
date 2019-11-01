import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../box';
import { usePropsFilter } from '../hooks';
import { themeGet } from '@styled-system/theme-get';
import { inputSizes } from '@fuji-ui/theme';
import is from 'styled-is';

const checkboxSizeMap = {
  s: '16px',
  m: '18px',
  l: '20px',
};

const Text = styled.span`
  margin-left: ${themeGet('space.s', '0.5rem')};
`;

const CheckboxNative = styled.input.attrs({ type: 'checkbox' })`
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

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const CheckboxDisplayed = styled(Box)`
  position: relative;
  display: inline-block;
  top: 2px;
  width: 16px;
  height: 16px;
  background: ${themeGet('colors.secondary', 'white')};
  border-radius: 3px;
  vertical-align: middle;
  transition: all 0.2s;
  ${Icon} {
    visibility: hidden;
  }
  ${CheckboxNative}:focus + & {
    box-shadow: 0 0 0 3px
      ${themeGet('colors.primaryLightVariant', 'transparent')};
  }
  ${CheckboxNative}:checked + & {
    background: ${themeGet('colors.primary', 'blue')};
    ${Icon} {
      visibility: visible;
    }
  }
`;

const CheckboxWrapper = styled(Box)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  line-height: unset;
  ${CheckboxDisplayed} {
    width: ${props => checkboxSizeMap[props.size]};
    height: ${props => checkboxSizeMap[props.size]};
  }
  ${is('disabled')`
    ${CheckboxDisplayed}, ${Text} {
        opacity: 0.4;
    }
  `}
  ${inputSizes}
`;

const Checkbox = React.forwardRef((props, ref) => {
  const {
    id,
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
    <CheckboxWrapper
      as="label"
      disabled={disabled}
      {...usePropsFilter(props, Box.propTypes)}
    >
      {/* label element to catch click event */}
      <CheckboxNative
        ref={ref}
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onCheck}
        disabled={disabled}
      />
      <CheckboxDisplayed>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </CheckboxDisplayed>
      {children && <Text>{children}</Text>}
    </CheckboxWrapper>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  disabled: false,
};

export { Checkbox };

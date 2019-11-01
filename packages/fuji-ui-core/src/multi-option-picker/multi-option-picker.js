import React, { Children, useState, useEffect, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../flex';
import { Skeleton } from '../skeleton';
import { usePropsFilter } from '../hooks';
import { inputSizes } from '@fuji-ui/theme';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import is from 'styled-is';

const Option = styled(Flex)`
  display: inline-flex;
  user-select: none;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('colors.secondary', 'gray')};
  border-width: ${themeGet('borderWidths.input', '1px')};
  border-style: solid;
  border-color: transparent;
  border-radius: ${themeGet('radii.small', '2px')};
  color: ${themeGet('colors.onSecondary', 'black')};
  padding: ${themeGet('space.s', '4px')};
  text-align: center;
  &:hover {
    color: ${themeGet('colors.onSecondary', 'black')};
    background-color: ${themeGet('colors.secondaryDarkVariant', 'darkGray')};
  }
  ${is('selected')`
    &,&:hover {
      background-color: ${themeGet('colors.primaryLightVariant', 'lightBlue')};
      color: ${themeGet('colors.onPrimary', 'white')};
      font-weight: bold;
    }
  `}
  ${inputSizes}
  & + & {
    margin-left: ${themeGet('space.xs', '4px')};
  }
`;

const MultiOptionPicker = props => {
  const { direction, children, onChange, defaultValue = [], maxLimit } = props;
  const [selected, setSelected] = useState(defaultValue);
  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  const flexProps = usePropsFilter(props, Flex.propTypes);
  const inputSizeProps = usePropsFilter(props, inputSizes.propTypes);
  const toggleSelect = value => {
    setSelected(state => {
      if (state.indexOf(value) >= 0) {
        return state.filter(v => v !== value);
      } else {
        return maxLimit && state.length >= maxLimit ? state : [...state, value];
      }
    });
  };

  return (
    <Flex flexDirection={direction} {...flexProps}>
      {Children.map(children, (child, i) => {
        // taking the 'value' props from option child
        const { value } = child.props;
        return cloneElement(child, {
          key: i,
          onClick: () => toggleSelect(value),
          as: 'a',
          selected: selected.indexOf(value) >= 0,
          ...inputSizeProps,
        });
      })}
    </Flex>
  );
};

MultiOptionPicker.displayName = 'MultiOptionPicker';
// eslint-disable-next-line react/display-name
MultiOptionPicker.skeleton = props => (
  // eslint-disable-next-line react/no-children-prop
  <Skeleton height="2rem" width="100%" {...props} children={null} />
);

MultiOptionPicker.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  maxLimit: PropTypes.number,
  defaultValue: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  ...inputSizes.propTypes,
};

MultiOptionPicker.defaultProps = {
  direction: 'row',
};

MultiOptionPicker.Option = Option;

export { MultiOptionPicker };

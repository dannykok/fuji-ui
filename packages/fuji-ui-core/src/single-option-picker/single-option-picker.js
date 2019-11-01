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

const SingleOptionPicker = props => {
  const { direction, children, onChange, defaultValue = [] } = props;
  const [selected, setSelected] = useState(defaultValue);
  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  const flexProps = usePropsFilter(props, Flex.propTypes);
  const inputSizeProps = usePropsFilter(props, inputSizes.propTypes);

  const toggleSelect = value => {
    setSelected(value);
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
          selected: value === selected,
          ...inputSizeProps,
        });
      })}
    </Flex>
  );
};

SingleOptionPicker.displayName = 'SingleOptionPicker';
// eslint-disable-next-line react/display-name
SingleOptionPicker.skeleton = props => (
  // eslint-disable-next-line react/no-children-prop
  <Skeleton height="2rem" width="100%" {...props} children={null} />
);

SingleOptionPicker.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...inputSizes.propTypes,
};

SingleOptionPicker.defaultProps = {
  direction: 'row',
};

SingleOptionPicker.Option = Option;

export { SingleOptionPicker };

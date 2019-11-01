import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './list-item';
import { usePropsExclude } from '../hooks/use-props-filter';
import { themeGet } from '@styled-system/theme-get';
import is from 'styled-is';

const SelectableListItemStyle = styled.a`
  display: block;
  border-style: none;
  padding: ${themeGet('space.s', '4px')};
  ${is('selected')`
    background-color: #F7F7F7;
  `}
  ${is('disabled')`
    opacity: 0.4;
  `}
`;

// a selectable list item with onclick callback
const SelectableListItem = props => {
  const { children, selected, disabled, onClick } = props;
  const propsForListItem = usePropsExclude(props, ['onClick', 'selected']);

  /*
      we use onmousedown => e.preventDefault to prevent the element taking focus,
      which it would have interfering onclick firing when placed in e.g. temporary popover
    */
  return (
    <SelectableListItemStyle
      onMouseDown={e => e.preventDefault()}
      onClick={onClick}
      selected={selected}
      disabled={disabled}
    >
      <ListItem p={0} {...propsForListItem}>
        {children}
      </ListItem>
    </SelectableListItemStyle>
  );
};

SelectableListItem.displayName = 'SelectableListItem';

SelectableListItem.propTypes = {
  ...ListItem.propTypes,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default SelectableListItem;

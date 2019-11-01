import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import { Row } from '../flex';
import { Checkbox } from '../checkbox';
import { usePropsExclude } from '../hooks';
import styled from 'styled-components';
import is from 'styled-is';
import { themeGet } from '@styled-system/theme-get';

// a checkable list item with a checkbox component

const CheckableListItemStyle = styled(Row)`
  color: inherit;
  align-items: center;
  padding: ${themeGet('space.s', '4px')};
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  :hover {
    color: ${themeGet('colors.primary', 'blue')};
    background-color: #fafafa;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  ${is('disabled')`
    opacity: 0.4;
    :hover {
      color: inherit;
    }
  `}
`;

const CheckableListItem = props => {
  const { children, selected = false, disabled, onClick } = props;
  const propsForListItem = usePropsExclude(props, ['onClick', 'selected']);
  /*
      we use onmousedown => e.preventDefault to prevent the element taking focus,
      which it would have interfering onclick firing when placed in e.g. temporary popover
    */
  return (
    <CheckableListItemStyle
      as="a"
      onMouseDown={e => e.preventDefault()}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
      disabled={disabled}
    >
      <Checkbox checked={selected} onChange={(_, e) => onClick(e)} mr="s" />
      <ListItem p="0" {...propsForListItem}>
        {children}
      </ListItem>
    </CheckableListItemStyle>
  );
};

CheckableListItem.displayName = 'CheckableListItem';

CheckableListItem.propTypes = {
  ...ListItem.propTypes,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CheckableListItem;

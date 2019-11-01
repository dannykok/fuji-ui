import React from 'react';
import PropTypes from 'prop-types';
import ssPropTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { space, color, border } from 'styled-system';

const ListItemStyle = styled.li`
    padding: ${themeGet('space.s', '0')} 0;
    font-size: ${themeGet('fontSizes.body', '1rem')};
    a {
      user-select: none;
    }
    ${space}
    ${color}
    ${border}
`;

// a simple list item
const ListItem = props => {
  const customProps = {};

  if (props.bordered) {
    customProps.borderBottomStyle = 'solid';
    customProps.borderBottomWidth = 'separator';
    customProps.borderColor = 'border';
  }

  return (
    <ListItemStyle {...props} {...customProps}>
      {props.children}
    </ListItemStyle>
  );
};

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  children: PropTypes.node,
  bordered: PropTypes.bool,
  ...ssPropTypes.space,
  ...ssPropTypes.color.propTypes,
  ...ssPropTypes.border,
};

export default ListItem;

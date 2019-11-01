import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import Styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const MenuWrapper = Styled(Box).attrs(() => ({ role: 'menu' }))`
    height: "100%";
    background-color: ${themeGet('colors.secondary', 'transparent')};
    color: ${themeGet('colors.onSecondary', 'inherit')};
    padding: ${themeGet('space.m', 0)};
    overflow-y: auto;
    a {
      text-decoration: none;
      border: 0;
    }
`;

const MenuBar = props => (
  <MenuWrapper width={[null, null, 180, 220]}>{props.children}</MenuWrapper>
);

MenuBar.displayName = 'MenuBar';

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;

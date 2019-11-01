import React from 'react';
import PropTypes from 'prop-types';
import { Column } from '../flex';
import Styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BAR_WIDTH = 50;

// TODO: define light color in theme
const NavigationBarItem = Styled.button.attrs(() => ({ type: 'button' }))`
  display: inline-block;
  position: relative;
  color: ${themeGet('colors.onPrimary', '#000000')};
  font-size: 18px;
  height: ${BAR_WIDTH + 'px'};
  text-align: center;
  > * {
    line-height: 1;
  }
`;

const NavigationBar = props => (
  <Column
    width={BAR_WIDTH}
    justifyContent="space-between"
    alignItems="stretch"
    backgroundColor="primary"
  >
    <Column alignItems="stretch">
      {props.menuItems.map(item => (
        <NavigationBarItem key={item.name} onClick={item.onClick}>
          {item.icon}
        </NavigationBarItem>
      ))}
    </Column>
    <Column alignItems="stretch">
      {props.settingItems.map(item => {
        // fix touch event overlap if the icon component is actually a popover
        const as = item.onClick ? undefined : 'div';
        return (
          <NavigationBarItem as={as} key={item.name} onClick={item.onClick}>
            {item.icon}
          </NavigationBarItem>
        );
      })}
    </Column>
  </Column>
);

NavigationBar.displayName = 'NavigationBar';

NavigationBar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  settingItems: PropTypes.array,
};

NavigationBar.defaultProps = {
  menuItems: [],
  settingItems: [],
};

export default NavigationBar;

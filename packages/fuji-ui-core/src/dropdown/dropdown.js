import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { List } from '../list';
import { Button } from '../button';
import { Popover } from '../popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = props => {
  const { hideCaret, anchor, renderMenu } = props;
  return (
    <DropdownCore
      anchor={anchor}
      renderMenu={renderMenu}
      renderTrigger={({ setOpened, opened }) => (
        <Button
          {...props}
          onClick={() => {}}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
        >
          {props.children}
          {!hideCaret && (
            <Caret aria-hidden>
              <FontAwesomeIcon icon={faAngleDown} rotation={opened ? 180 : 0} />
            </Caret>
          )}
        </Button>
      )}
    />
  );
};

const Caret = styled.span.attrs(['aria-hidden'])`
  margin-left: 0.6rem;
  opacity: 0.8;
  > svg {
    padding-top: 2px;
    transition: transform 0.1s;
  }
`;

const DropdownCore = props => {
  const [opened, setOpened] = useState(false);

  const handleFocus = isFocus => {
    setOpened(isFocus);
  };

  return (
    <Box
      onMouseOver={() => handleFocus(true)}
      onMouseLeave={() => handleFocus(false)}
    >
      <Popover anchor={props.anchor} menu={props.renderMenu()} popped={opened}>
        {props.renderTrigger({ setOpened, opened })}
      </Popover>
    </Box>
  );
};

const Menu = props => {
  return <List>{props.children}</List>;
};

const MenuItem = props => <List.Item>{props.children}</List.Item>;

const SelectableMenuItem = props => (
  <List.SelectableItem onClick={props.onClick}>
    {props.children}
  </List.SelectableItem>
);

Dropdown.displayName = 'Dropdown';
Menu.displayName = 'Menu';
MenuItem.displayName = 'MenuItem';

Dropdown.propTypes = {
  ...Button.propTypes,
  hideCaret: PropTypes.bool,
  renderMenu: PropTypes.func.isRequired,
  anchor: PropTypes.oneOf([
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
  ]).isRequired,
};

Dropdown.defaultProps = {
  variant: 'secondary',
  anchor: 'bottomRight',
  size: 'm',
};

DropdownCore.propTypes = {
  renderTrigger: PropTypes.func.isRequired,
  renderMenu: PropTypes.func.isRequired,
  anchor: Dropdown.propTypes.anchor,
};

Menu.propTypes = { ...List.propTypes };
MenuItem.propTypes = { ...List.Item.propTypes };
SelectableMenuItem.propTypes = { ...List.SelectableItem.propTypes };
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.SelectableMenuItem = SelectableMenuItem;
export { Dropdown };

import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, InputGroup, Dropdown } from '@fuji-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const { Menu, SelectableMenuItem, MenuItem } = Dropdown;

const renderMenu = () => (
  <Menu>
    <SelectableMenuItem onClick={() => {}}>Edit my profile</SelectableMenuItem>
    <SelectableMenuItem onClick={() => {}}>
      Billing &amp; Account
    </SelectableMenuItem>
    <SelectableMenuItem onClick={() => {}}>Setting</SelectableMenuItem>
    <MenuItem>Not selectable</MenuItem>
  </Menu>
);

const DropdownPage = props => {
  return (
    <DocPage>
      <T.H1>Dropdown</T.H1>
      <T.P>Hide menu and expand on mouse over</T.P>
      <InputGroup size="s" mt="l">
        <Dropdown renderMenu={renderMenu}>SELECT</Dropdown>
        <Dropdown renderMenu={renderMenu} variant="primary">
          select
        </Dropdown>
        <Dropdown renderMenu={renderMenu} hideCaret>
          <FontAwesomeIcon icon={faBars} />
        </Dropdown>
      </InputGroup>
      <InputGroup size="s" mt="l">
        <Dropdown renderMenu={renderMenu} variant="primary" anchor="bottomLeft">
          bottomLeft
        </Dropdown>
        <Dropdown renderMenu={renderMenu} variant="primary" anchor="bottom">
          bottom
        </Dropdown>
        <Dropdown
          renderMenu={renderMenu}
          variant="primary"
          anchor="bottomRight"
        >
          bottomRight
        </Dropdown>
        <Dropdown renderMenu={renderMenu} variant="primary" anchor="topLeft">
          topLeft
        </Dropdown>
        <Dropdown renderMenu={renderMenu} variant="primary" anchor="top">
          top
        </Dropdown>
        <Dropdown renderMenu={renderMenu} variant="primary" anchor="topRight">
          topRight
        </Dropdown>
      </InputGroup>
      <InputGroup size="m" mt="l">
        <Dropdown renderMenu={renderMenu}>SELECT</Dropdown>
        <Dropdown renderMenu={renderMenu} variant="primary">
          select
        </Dropdown>
        <Dropdown renderMenu={renderMenu} hideCaret>
          <FontAwesomeIcon icon={faBars} />
        </Dropdown>
      </InputGroup>
      <InputGroup size="l" mt="l">
        <Dropdown renderMenu={renderMenu}>SELECT</Dropdown>
        <Dropdown renderMenu={renderMenu} variant="primary">
          select
        </Dropdown>
        <Dropdown renderMenu={renderMenu} hideCaret>
          <FontAwesomeIcon icon={faBars} />
        </Dropdown>
      </InputGroup>
    </DocPage>
  );
};

export default DropdownPage;

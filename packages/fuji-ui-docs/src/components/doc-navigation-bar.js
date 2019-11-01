import React, { useState } from 'react';
import { Typography as T, NavigationBar, Drawer } from '@fuji-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faSlidersH,
} from '@fortawesome/free-solid-svg-icons';
import DocNavigationDrawer from './doc-navigation-drawer';

const DocNavigationBar = props => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const menuItems = [
    {
      name: 'menu',
      hint: 'Menu',
      icon: <FontAwesomeIcon icon={faBars} />,
      onClick: () => setDrawerOpened(true),
    },
    {
      name: 'search',
      hint: 'Search',
      icon: <FontAwesomeIcon icon={faSearch} />,
      onClick: () => alert('Search'),
    },
  ];

  const settingItems = [
    {
      name: 'setting',
      hint: 'Setting',
      icon: <FontAwesomeIcon icon={faSlidersH} />,
      onClick: () => alert('Setting'),
    },
  ];
  return (
    <>
      <Drawer opened={drawerOpened} onHide={() => setDrawerOpened(false)}>
        <Drawer.Menu onHide={() => setDrawerOpened(false)}>
          <DocNavigationDrawer />
        </Drawer.Menu>
      </Drawer>
      <NavigationBar menuItems={menuItems} settingItems={settingItems} />
    </>
  );
};

export default DocNavigationBar;

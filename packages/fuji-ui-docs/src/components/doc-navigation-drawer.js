import React from 'react';
import { Typography as T, List } from '@fuji-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab, faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

const DrawerMenuItem = styled(List.Item)`
  padding: 0;
  margin-top: 8px;
  svg {
    margin-right: 10px;
    color: #aaaaaa;
  }
  a {
    display: inline-block;
    width: 200px;
    color: black;
    padding: 0.5rem;
    border-radius: 4px;
    border: 0;
    &:hover {
      background-color: ${themeGet('colors.secondary')};
    }
  }
`;

const DocNavigationDrawer = props => {
  return (
    <List header={<T.H4>Fuji-ui Documentation</T.H4>}>
      <DrawerMenuItem>
        <a href="https://github.com/dannykok/fuji-ui">
          <FontAwesomeIcon icon={faGitlab} />
          Gitlab
        </a>
      </DrawerMenuItem>
      <DrawerMenuItem>
        <a href="https://styled-system.com">
          <FontAwesomeIcon icon={faPuzzlePiece} />
          Styled-system
        </a>
      </DrawerMenuItem>
      <DrawerMenuItem>
        <a href="https://www.styled-components.com/">
          <FontAwesomeIcon icon={faPuzzlePiece} />
          Styled-components
        </a>
      </DrawerMenuItem>
      <DrawerMenuItem>
        <a href="https://fontawesome.com/">
          <FontAwesomeIcon icon={faFortAwesome} />
          FontAwesome
        </a>
      </DrawerMenuItem>
    </List>
  );
};

export default DocNavigationDrawer;

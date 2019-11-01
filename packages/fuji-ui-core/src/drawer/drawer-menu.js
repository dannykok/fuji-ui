import React from 'react';
import { Box } from '../box';
import { Button } from '../button';
import { Column } from '../flex';
import { usePropsExclude } from '../hooks';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const DrawerMenuWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 2rem 1rem 2rem 0;
  height: 100%;
  min-height: 0;
  overflow-y: auto;
`;

const DrawerMenu = props => {
  const wrapperProps = usePropsExclude(props, ['onHide']);

  return (
    <DrawerMenuWrapper {...wrapperProps}>
      <Column width="48px" justifyContent="flex-start" alignItems="center">
        <Button
          variant="icon"
          onClick={() => props.onHide()}
          fontSize="28px"
          color="onSurface"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </Column>
      <Box flex={1}>{props.children}</Box>
    </DrawerMenuWrapper>
  );
};

DrawerMenu.propTypes = {
  children: PropTypes.node,
  onHide: PropTypes.func.isRequired,
};

export { DrawerMenu };

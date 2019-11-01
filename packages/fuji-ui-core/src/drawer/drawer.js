import React from 'react';
import { Box } from '../box';
import { usePropsExclude } from '../hooks';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { match } from 'styled-is';

const DrawerBaseLayer = styled(Box)`
  display: flex;
  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  flex-direction: row;
  justify-content: ${props =>
    props.anchor === 'left' ? 'flex-start' : 'flex-end'};
  align-items: stretch;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: ${props => (props.opened ? 1 : 0)};
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.3);
`;

const DrawerOverlay = styled(Box)`
  background-color: ${themeGet('colors.surface')};
  color: ${themeGet('colors.onSurface')};
  ${match('anchor', 'left')`
    margin-left: ${props => (props.opened ? 0 : '-1000px')};
  `}
  ${match('anchor', 'right')`
    margin-right: ${props => (props.opened ? 0 : '-1000px')};
  `}
  box-shadow: ${themeGet('shadows.large')};
  transition: all 0.3s;
`;

const Drawer = props => {
  const { opened, anchor, onHide, children, width } = props;
  const overlayProps = usePropsExclude(props, ['onHide']);
  return (
    <DrawerBaseLayer
      opened={opened}
      anchor={anchor}
      onMouseDown={() => onHide()}
    >
      <DrawerOverlay
        {...overlayProps}
        width={width}
        onMouseDown={e => e.stopPropagation()}
      >
        {children}
      </DrawerOverlay>
    </DrawerBaseLayer>
  );
};

Drawer.propTypes = {
  children: PropTypes.node,
  anchor: PropTypes.oneOf(['left', 'right']),
  opened: PropTypes.bool,
  width: Box.propTypes.width,
  onHide: PropTypes.func.isRequired,
};

Drawer.defaultProps = {
  anchor: 'left',
  width: ['440px', null, null, '600px'],
  onHide: () => {},
};

export { Drawer };

import { Flex } from '../flex';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import is from 'styled-is';

const Selectable = styled(Flex)`
  padding: ${themeGet('space.xs', '2px')};
  border-radius: ${themeGet('radii.m', '4px')};
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  user-select: none;
  color: ${themeGet('colors.onSurface', 'black')};
  border-color:  ${themeGet('colors.primaryLightVariant', '#EEE')};    
  /* ${is('inRange')`
    color: ${themeGet('colors.onSecondary', 'black')};
    background-color: ${themeGet('colors.secondary', '#EEEEEE')};    
  `} */
  ${is('selected')`
    color: ${themeGet('colors.onPrimary', 'white')} !important;
    background-color: ${themeGet('colors.primary', 'blue')} !important;
  `}
  opacity: ${props => (props.disabled ? 0.2 : 1)};
`;

export { Selectable };

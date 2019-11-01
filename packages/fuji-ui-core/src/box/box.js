import styled from 'styled-components';
import {
  space,
  color,
  flexbox,
  grid,
  border,
  borderRadius,
  shadow,
  background,
  typography,
  position,
} from 'styled-system';
import ssPropTypes from '@styled-system/prop-types';
import { layout } from '@fuji-ui/theme';
import { themeGet } from '@styled-system/theme-get';

const Box = styled.div`
  box-sizing: 'border-box';
  min-width: 0;
  transition: ${themeGet('transitions.box', 'none')};
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${grid}
  ${border}
  ${borderRadius}
  ${shadow}
  ${background}
  ${typography}
  ${position}
`;

Box.displayName = 'Box';

Box.propTypes = {
  ...ssPropTypes.space,
  ...ssPropTypes.color,
  ...ssPropTypes.layout,
  ...ssPropTypes.flexbox,
  ...ssPropTypes.grid,
  ...ssPropTypes.border,
  ...ssPropTypes.borderRadius,
  ...ssPropTypes.shadow,
  ...ssPropTypes.background,
  ...ssPropTypes.typography,
  ...ssPropTypes.position,
};

export { Box };

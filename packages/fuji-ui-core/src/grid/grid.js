import styled from 'styled-components';
import {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} from 'styled-system';
import ssPropTypes from '@styled-system/prop-types';

import { Box } from '../box';

// prettier-ignore
const Grid = styled(Box)`
  display: ${props => props.display || 'grid'};
  transition: all 1s;
  ${gridGap}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridColumn}
  ${gridRow}
  ${gridAutoFlow}
  ${gridAutoColumns}
  ${gridAutoRows}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridTemplateAreas}
  ${gridArea}
`;

Grid.displayName = 'Grid';

export { Grid };

Grid.propTypes = {
  ...ssPropTypes.grid,
};

import { Box } from '../box';
import styled from 'styled-components';
import { placeHolderStyle } from './placeholder';
export const ICON_WIDTH = '33px';

export default styled(Box)`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${ICON_WIDTH};
  z-index: 10;
  top: 0;
  bottom: 0;
  ${placeHolderStyle}
`;

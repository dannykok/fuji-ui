import styled from 'styled-components';
import { Box } from '../box';

// check can-i-use for latest compatibility
// https://caniuse.com/#search=sticky

const StickyBox = styled(Box)`
  position: sticky;
  position: -webkit-sticky;
  top: ${props => props.top || 0};
  z-index: ${props => props.zIndex || 200};
`;

export { StickyBox };

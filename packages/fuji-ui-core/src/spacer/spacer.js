import styled from 'styled-components';
import { space, flexbox } from 'styled-system';
import { layout } from '@fuji-ui/theme';
import ssPropTypes from '@styled-system/prop-types';

const Spacer = styled.div`
  ${layout}
  ${space}
  ${flexbox}
`;

Spacer.displayName = 'Spacer';

Spacer.propTypes = {
  ...ssPropTypes.layout,
  ...ssPropTypes.space,
  ...ssPropTypes.flexbox,
};

export { Spacer };

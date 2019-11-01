import styled, { css } from 'styled-components';
import { Box } from '../box';
import { match } from 'styled-is';

const flexStyle = css`
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex;
`;

const inlineFlexStyle = css`
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
`;

const Flex = styled(Box)`
  ${match('display', 'flex')`
    ${flexStyle}
  `}
  ${match('display', 'inline-flex')`
    ${inlineFlexStyle}
  `}
`;

const Row = styled(Flex).attrs(() => ({ role: 'row' }))`
  flex-direction: row;
  -webkit-justify-content: ${props => props.justifyContent || 'flex-start'};
  -webkit-align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
`;

const Column = styled(Flex).attrs(() => ({ role: 'column' }))`
  flex-direction: column;
  -webkit-justify-content: ${props => props.justifyContent || 'flex-start'};
  -webkit-align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
`;

Flex.displayName = 'Flex';
Row.displayName = 'Row';
Column.displayName = 'Column';

Flex.propTypes = {
  ...Box.propTypes,
};

Flex.defaultProps = {
  display: 'flex',
};

Row.propTypes = Flex.propTypes;
Row.defaultProps = Flex.defaultProps;

Column.propTypes = Flex.propTypes;
Column.defaultProps = Flex.defaultProps;

export { Flex, Row, Column };

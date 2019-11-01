import styled from 'styled-components';
import { match } from 'styled-is';
import { themeGet } from '@styled-system/theme-get';

export const Separator = styled.hr`
${match('space', 's')`
    margin-top: ${themeGet('spaces.s', '0.5rem')};
    margin-bottom: ${themeGet('spaces.s', '0.5rem')};
`}
${match('space', 'm')`
    margin-top: ${themeGet('spaces.m', '1rem')};
    margin-bottom: ${themeGet('spaces.m', '1rem')};
`}
${match('space', 'l')`
    margin-top: ${themeGet('spaces.l', '1.5rem')};
    margin-bottom: ${themeGet('spaces.l', '1.5rem')};
`}
`;

Separator.defaultProps = {
  space: 'm',
};

import { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const placeHolderStyle = css`
  color: ${themeGet('colors.onInput', '#000000')};
  opacity: 0.36;
`;

export const disabledPlaceHolderStyle = css`
  color: ${themeGet('colors.onInput', '#000000')};
  opacity: 0.1;
`;

import styled, { css } from 'styled-components';
import { layout, color, space, typography, flexbox } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Skeleton } from '../skeleton';

// control opacity over heading, paragraph or disabled text style
const TEXT_OPACITY = {
  heading: 0.95,
  body: 0.9,
  disabled: 0.4,
};

// space for elements that would like to separate apart from the ancestor
const headerMarginStyle = css`
  margin-top: 2rem;
  &:first-child {
    margin-top: 0;
  }
  margin-bottom: 0;
`;

// space for elements that would like to keep slight distance from the ancestor
const bodyMarginStyle = css`
  margin-top: 1rem;
  margin-bottom: 0;
`;

export const H1 = styled.h1`
  font-family: ${themeGet('fonts.heading', 'inherit')};
  font-size: ${themeGet('fontSizes.h1', '2.5rem')};
  font-weight: ${themeGet('fontWeights.heading', '700')};
  opacity: ${props => props.opacity || TEXT_OPACITY.heading};
  line-height: ${themeGet('lineHeights.heading', '1.25')};
  ${headerMarginStyle}
  ${color}
  ${space}
  ${layout}
  ${typography}
`;

H1.displayName = 'H1';

export const H2 = styled.h2`
  font-family: ${themeGet('fonts.heading', 'inherit')};
  font-size: ${themeGet('fontSizes.h2', '2rem')};
  font-weight: ${themeGet('fontWeights.heading', '700')};
  opacity: ${props => props.opacity || TEXT_OPACITY.heading};
  line-height: ${themeGet('lineHeights.heading', '1.25')};
  ${headerMarginStyle}
  ${color}
  ${space}
  ${layout}
  ${typography}
`;

H2.displayName = 'H2';

export const H3 = styled.h3`
  font-family: ${themeGet('fonts.heading', 'inherit')};
  font-size: ${themeGet('fontSizes.h3', '1.5rem')};
  font-weight: ${themeGet('fontWeights.heading', '700')};
  opacity: ${props => props.opacity || TEXT_OPACITY.heading};
  line-height: ${themeGet('lineHeights.heading', '1.25')};
  ${headerMarginStyle}
  ${color}
  ${space}
  ${layout}
  ${typography}
`;

H3.displayName = 'H3';

export const H4 = styled.h4`
  font-family: ${themeGet('fonts.heading', 'inherit')};
  font-size: ${themeGet('fontSizes.h4', '1.25rem')};
  font-weight: ${themeGet('fontWeights.heading', '700')};
  opacity: ${props => props.opacity || TEXT_OPACITY.heading};
  line-height: ${themeGet('lineHeights.heading', '1.25')};
  ${headerMarginStyle}
  ${color}
  ${space}
  ${layout}
  ${typography}
`;

H4.displayName = 'H4';

export const H5 = styled.h5`
  font-family: ${themeGet('fonts.heading', 'inherit')};
  font-size: ${themeGet('fontSizes.h5', '1rem')};
  font-weight: ${themeGet('fontWeights.heading', '700')};
  opacity: ${props => props.opacity || TEXT_OPACITY.heading};
  line-height: ${themeGet('lineHeights.heading', '1.25')};
  ${headerMarginStyle}
  ${color}
  ${space}
  ${layout}
  ${typography}
`;

H5.displayName = 'H5';

export const H6 = styled.h6`
  font-family: ${themeGet('fonts.heading', 'inherit')};
  font-size: ${themeGet('fontSizes.h6', '1rem')};
  font-weight: ${themeGet('fontWeights.heading', '700')};
  opacity: ${props => props.opacity || TEXT_OPACITY.heading};
  line-height: ${themeGet('lineHeights.heading', '1.25')};
  ${headerMarginStyle}
  ${color}
  ${space}
  ${layout}
  ${typography}
`;

H6.displayName = 'H6';

export const Subtitle1 = styled.span`
  display: block;
  font-family: ${themeGet('fonts.body', 'inherit')};
  font-size: ${themeGet('fontSizes.body', '1rem')};
  font-weight: ${themeGet('fontWeights.subtitle', '400')};
  opacity: ${props => props.opacity || TEXT_OPACITY.heading};
  line-height: ${themeGet('lineHeights.subtitle', '1.5')};
  ${bodyMarginStyle}
  &:first-child {
    margin-top: 0;
  }
  ${color}
  ${space}
  ${layout}  
  ${typography}
  ${flexbox}
`;

Subtitle1.displayName = 'Subtitle1';

export const Subtitle2 = styled.span`
  display: block;
  font-family: ${themeGet('fonts.body', 'inherit')};
  font-size: ${themeGet('fontSizes.body', '1rem')};
  font-weight: ${themeGet('fontWeights.body', '400')};
  opacity: ${props => props.opacity || TEXT_OPACITY.heading};
  line-height: ${themeGet('lineHeights.subtitle', '1.5')};
  ${bodyMarginStyle}
  &:first-child {
    margin-top: 0;
  }
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${flexbox}
`;

Subtitle2.displayName = 'Subtitle2';

export const P = styled.p`
  font-family: ${themeGet('fonts.body', 'inherit')};
  font-size: ${themeGet('fontSizes.body', '1rem')};
  opacity: ${props => props.opacity || TEXT_OPACITY.body};
  line-height: ${themeGet('lineHeights.body', '1.5')};
  ${bodyMarginStyle}
  ${color}
  ${space}
  ${typography}
`;

P.displayName = 'P';

export const Span = styled.span`
  font-family: ${themeGet('fonts.body', 'inherit')};
  font-size: ${themeGet('fontSizes.body', '1rem')};
  opacity: ${props => props.opacity || TEXT_OPACITY.body};
  line-height: ${themeGet('lineHeights.body', '1.5')};
  ${color}
  ${space}
  ${typography}
`;

Span.displayName = 'Span';

// define skeleton
const baseSkeleton = (display, width, height, content = 'a') => css`
  color: transparent;
  display: ${display};
  width: ${width};
  height: ${height};
  &::before {
    content: '${content}';
  }
`;

H1.skeleton = styled.span`
  ${Skeleton.style}
  ${headerMarginStyle}
  ${baseSkeleton('block', '10rem', '2rem')}
`;

H2.skeleton = styled.span`
  ${Skeleton.style}
  ${headerMarginStyle}
  ${baseSkeleton('block', '10rem', '1.8rem')}
`;

H3.skeleton = styled.span`
  ${Skeleton.style}
  ${headerMarginStyle}
  ${baseSkeleton('block', '10rem', '1.4rem')}
`;

H4.skeleton = styled.span`
  ${Skeleton.style}
  ${headerMarginStyle}
  ${baseSkeleton('block', '10rem', '1.2rem')}
`;

H5.skeleton = styled.span`
  ${Skeleton.style}
  ${headerMarginStyle}
  ${baseSkeleton('block', '10rem', '1rem')}
`;

H6.skeleton = styled.span`
  ${Skeleton.style}
  ${headerMarginStyle}
  ${baseSkeleton('block', '10rem', '1rem')}
`;

Subtitle1.skeleton = styled.span`
  ${Skeleton.style}
  ${bodyMarginStyle}
  ${baseSkeleton('block', '6rem', themeGet('fontSizes.body', '1rem'))}
`;

Subtitle2.skeleton = styled.span`
  ${Skeleton.style}
  ${bodyMarginStyle}
  ${baseSkeleton('block', '6rem', themeGet('fontSizes.body', '1rem'))}
`;

P.skeleton = styled.span`
  ${Skeleton.style}
  ${baseSkeleton(
    'inline',
    '100%',
    '0.75rem',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
  )}
  font-size: 10px;
  line-height: 1.6;
`;

Span.skeleton = styled(Span)`
  ${Skeleton.style}
  ${baseSkeleton(
    'inline',
    '100%',
    '0.75rem',
    'Lorem Ipsum is simply the best dummy text',
  )}
  font-size: 10px;
  line-height: 1.6;
`;

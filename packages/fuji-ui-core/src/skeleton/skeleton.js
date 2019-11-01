import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../box';
import { inputSizes } from '@fuji-ui/theme';
import themeGet from '@styled-system/theme-get';

const skeletonStyle = css`
  color: transparent;
  background: linear-gradient(-90deg, #f0f0f0 0%, #fafafa 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 0.8s ease-in-out infinite;
  border-radius: ${props => props.borderRadius || themeGet('radii.s', '4px')};
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SkeletonBase = styled(Box)`
  ${skeletonStyle}
  ${inputSizes}
`;

const Skeleton = props => {
  return <SkeletonBase {...props} />;
};

Skeleton.style = skeletonStyle;

Skeleton.propTypes = {
  ...Box.propTypes,
  ...inputSizes.propTypes,
};

Skeleton.defaultProps = {
  width: '14rem',
  height: '1rem',
};

export { SkeletonBase, Skeleton };

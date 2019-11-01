import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { border } from 'styled-system';
import ssPropTypes from '@styled-system/prop-types';
import { layout } from '@fuji-ui/theme';
import { themeGet } from '@styled-system/theme-get';
import is from 'styled-is';

const Image = styled.img`
  /* change to theme color */
  background-color: #eee;

  ${is('rounded')`
    border-radius: ${themeGet('radii.m', '4px')};
  `}

  ${layout}
  ${border}
`;

const CircularImage = styled(Box)`
  border-radius: 50%;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

Image.displayName = 'Image';

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  ...ssPropTypes.layout,
  ...ssPropTypes.border,
};

CircularImage.propTypes = {
  src: PropTypes.string.isRequired,
  ...Box.propTypes,
};

Image.Circular = CircularImage;

export { Image };

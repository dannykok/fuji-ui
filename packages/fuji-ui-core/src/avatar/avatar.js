import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../flex';
import { Box } from '../box';
import { Image } from '../image';
import { useColorPalette } from '../hooks/use-color-palette';
import styled from 'styled-components';

const sizeMap = (size = 'm') => {
  var value = 0;
  var fs = '16px';
  switch (size) {
    case 'xs':
      value = '24px';
      fs = '12px';
      break;
    case 's':
      value = '32px';
      fs = '16px';
      break;
    case 'l':
      value = '64px';
      fs = '32px';
      break;
    case 'xl':
      value = '80px';
      fs = '36px';
      break;
    case 'xxl':
      value = '96px';
      fs = '48px';
      break;
    case 'm':
    default:
      value = '48px';
      fs = '24px';
  }
  return { width: value, height: value, fontSize: fs };
};

const widthProps = ({ width }) => (width ? { width } : {});
const heightProps = ({ height }) => (height ? { height } : {});
const sizeProps = ({ width, height, size }) =>
  size || (!width && !height) ? sizeMap(size) : {};

const ImageWrapper = styled(Box)`
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: white;
  text-transform: uppercase;
`;

const Avatar = props => {
  const { src, name, onClick } = props;

  const imageProps = {
    ...widthProps(props),
    ...heightProps(props),
    ...sizeProps(props),
  };

  const color = useColorPalette(name);

  return (
    <ImageWrapper as="a" onClick={onClick} {...props} bg={color}>
      {src !== '' ? (
        <Image.Circular src={src} {...imageProps} />
      ) : (
        <Flex
          justifyContent="center"
          alignItems="center"
          color="white"
          {...imageProps}
        >
          {name[0]}
        </Flex>
      )}
    </ImageWrapper>
  );
};

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  ...Image.Circular.propTypes,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  name: 'Unknown',
  src: '',
  onClick: () => {},
};

export { Avatar };

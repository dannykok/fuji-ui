import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { usePropsExclude } from '../hooks';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { match } from 'styled-is';

const sizeMap = (size = 'm') => {
  var value = 0;
  var fs = '16px';
  switch (size) {
    case 'xs':
      value = '18px';
      fs = '12px';
      break;
    case 's':
      value = '24px';
      fs = '16px';
      break;
    case 'l':
      value = '48px';
      fs = '32px';
      break;
    case 'xl':
      value = '54px';
      fs = '36px';
      break;
    case 'xxl':
      value = '64px';
      fs = '48px';
      break;
    case 'm':
    default:
      value = '36px';
      fs = '24px';
  }
  return { width: value, height: value, fontSize: fs };
};

const Badge = styled(Box)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  text-align: center;
  user-select: none;
  ${match('variant', 'default')`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50%;
    border-color: ${themeGet('colors.primary', 'blue')};
    color: ${themeGet('colors.primary', 'blue')};
    background-color: transparent;
  `}
  ${match('variant', 'unread')`
    width: auto;
    height: auto;
    padding: 0 0.5rem;
    border-radius: 3rem;
    letter-spacing: -2px;
    text-indent: -2px;
    background-color: #ec407a;
    color: white;
  `}
`;

const NumberBadge = props => {
  const { size } = props;

  const _props = {
    ...sizeMap(size),
    ...usePropsExclude(props, ['size']),
  };

  return (
    <Badge {..._props}>
      <span>{props.children}</span>
    </Badge>
  );
};

NumberBadge.propTypes = {
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
  variant: PropTypes.oneOf(['default', 'unread']),
  children: PropTypes.node,
};
NumberBadge.defaultProps = {
  variant: 'default',
};

export { NumberBadge };

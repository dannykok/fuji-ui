import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../flex';
import ssPropTypes from '@styled-system/prop-types';
import { inputSizes } from '@fuji-ui/theme';
import styled from 'styled-components';
import { match } from 'styled-is';
import { themeGet } from '@styled-system/theme-get';

const LayoutWrapper = styled(Flex)`
  display: inline-flex;
  flex-wrap: ${props => (props.direction === 'row-wrap' ? 'wrap' : 'nowrap')};
  flex-direction: ${props => props.direction};
  > * {
    ${match('direction', 'row')`
      &:nth-child(n + 2) {
        margin-left: ${props => themeGet(`space.${props.space}`)};
      }
    `}
    ${match('direction', 'row-wrap')`
      margin-bottom: ${props => themeGet(`space.${props.space}`)};
      margin-right: ${props => themeGet(`space.${props.space}`)};
    `}
    ${match('direction', 'column')`
      margin-bottom: ${props => themeGet(`space.${props.space}`)};
    `}
  }
`;

const InputGroup = props => {
  const { size, children } = props;
  // const spaceProps =
  //   direction === 'row' ? { mr: space, my: space } : { my: space };

  return (
    <LayoutWrapper {...props}>
      {children &&
        React.Children.map(children, (child, i) => {
          if (child) {
            return child.type ? cloneElement(child, { key: i, size }) : child;
          } else return null;
        })}
    </LayoutWrapper>
  );
};

InputGroup.displayName = 'InputGroup';

InputGroup.propTypes = {
  ...ssPropTypes.space,
  ...inputSizes.propTypes, // size
  space: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  children: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'row-wrap', 'column']),
};

InputGroup.defaultProps = {
  direction: 'row',
  space: 's',
};

export { InputGroup };

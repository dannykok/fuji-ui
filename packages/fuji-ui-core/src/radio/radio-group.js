import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../flex';
import ssPropTypes from '@styled-system/prop-types';
import { inputSizes } from '@fuji-ui/theme';

const RadioGroup = props => {
  const {
    size,
    space,
    direction,
    children,
    name,
    defaultValue,
    onChange,
    childRef,
  } = props;
  const spaceProps =
    direction === 'row' ? { mr: space, mt: space } : { mt: space };

  return (
    <Flex
      {...props}
      display="inline-flex"
      flexWrap="wrap"
      flexDirection={direction}
    >
      {children &&
        React.Children.map(children, (child, i) => {
          if (child) {
            const { value } = child.props;
            const defaultChecked =
              !!defaultValue && defaultValue === value ? true : undefined;
            return child.type
              ? cloneElement(child, {
                  key: i,
                  size,
                  ...spaceProps,
                  name,
                  defaultChecked,
                  onChange,
                  ref: childRef,
                })
              : child;
          } else return null;
        })}
    </Flex>
  );
};

RadioGroup.displayName = 'RadioGroup';
RadioGroup.propTypes = {
  ...ssPropTypes.space,
  ...inputSizes.propTypes, // size
  space: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  children: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column']),
  name: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  childRef: PropTypes.func,
};

RadioGroup.defaultProps = {
  direction: 'row',
  space: 's',
};

export { RadioGroup };

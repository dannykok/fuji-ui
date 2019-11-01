import React from 'react';
import PropTypes from 'prop-types';
import T, {Span } from '../typography';
import { Box } from '../box';
import { usePropsExclude} from '../hooks';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

// the .attrs here is to save unnecessary class generation
const FormItemWrapper = styled(Box).attrs(({ marginTop, mt }) => {
  const _m =
    marginTop !== undefined ? marginTop : mt !== undefined ? mt : undefined;
  if (_m) {
    return {
      styled: {
        marginTop: marginTop,
      },
    };
  }
})`
  & + & {
    margin-top: ${themeGet('space.m', '1rem')};
  }
`;

const FormItem = props => {
  const { name, label, errorMessage } = props;
  const wrapperProps = usePropsExclude(props, [
    'name',
    'label',
    'errorMessage',
  ]);
  return (
    <FormItemWrapper {...wrapperProps}>
      {label && (
        <T.Subtitle1 as="label" htmlFor={name} mb="xs">
          {label}
        </T.Subtitle1>
      )}
      <Box>
        {name
          ? React.Children.map(props.children, child => {
              if (React.isValidElement(child))
                return React.cloneElement(child, { id: name, name });
              else return child;
            })
          : props.children}
      </Box>
      {errorMessage && <Span color="error">{errorMessage}</Span>}
    </FormItemWrapper>
  );
};

FormItem.displayName = 'FormItem';

/* TODO: probably we want to add skeleton for the label ? */

FormItem.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  errorMessage: PropTypes.string,
  children: PropTypes.node,
};

export default FormItem;

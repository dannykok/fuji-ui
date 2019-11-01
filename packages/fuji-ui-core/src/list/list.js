import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ListWrapper = styled(Box).attrs(() => ({ role: 'list' }))`
  & + & {
    margin-top: ${themeGet('space.m', '1rem')};
  }
`;

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Header = styled(Box)`
  padding: ${themeGet('space.s', '0')} 0;
  font-size: ${themeGet('fontSizes.body', '1rem')};
`;

const Footer = Header;

const List = props => (
  <ListWrapper {...props}>
    {props.header && <Header>{props.header}</Header>}
    <UnorderedList>{props.children}</UnorderedList>
    {props.footer && <Footer>{props.footer}</Footer>}
  </ListWrapper>
);

List.displayName = 'List';

List.propTypes = {
  ...Box.propTypes,
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
};

export default List;

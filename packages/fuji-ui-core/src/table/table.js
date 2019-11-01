import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { themeGet } from '@styled-system/theme-get';

const TableStyle = styled(Box).attrs({ role: 'table' })`
  width: 100%;
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
  table-layout: ${props => props.tableLayout || 'auto'};
`;

const TableCell = styled(Box)`
  min-width: auto;
  text-align: ${props => props.textAlign || 'left'};
  padding: ${themeGet('space.m', '12px')};
  font-weight: ${props => (props.header ? '700' : '400')};
`;

const THead = styled.thead``;

const TBody = styled.tbody``;

const TR = styled.tr`
  justify-items: stretch;
  align-items: center;
  align-content: start;
  border-width: ${themeGet('borders.separator', '1px')};
  border-bottom-style: solid;
  border-color: ${themeGet('colors.border', '#EEEEEE')};
`;

const Table = props => <TableStyle as="table" {...props} />;
const TD = props => <TableCell as="td" {...props} />;
const TH = props => <TableCell as="th" header {...props} />;

Table.propTypes = {
  tableLayout: PropTypes.oneOf(['inherit', 'auto', 'fixed']),
};

Table.THead = THead;
Table.TBody = TBody;
Table.TR = TR;
Table.TH = TH;
Table.TD = TD;

export { Table };

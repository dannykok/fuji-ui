import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../box';
import { Row } from '../flex';
import { Checkbox } from '../checkbox';
import { usePropsFilter } from '../hooks';

import { Skeleton } from '../skeleton';
import { CheckboxColGroup } from './col-group';
import { Table } from './table';
import EmptyView from './empty-view';
import { themeGet } from '@styled-system/theme-get';

const { THead, TBody, TR, TH, TD } = Table;

const DataTable = React.memo(props => {
  const {
    scheme,
    data,
    idKey,
    renderColumn,
    hideHeader,
    useCheckbox,
    defaultCheckedRows,
    onCheck,
    emptyView,
  } = props;
  const [checkedRows, setCheckedRows] = useState(defaultCheckedRows);
  const _boxProps = usePropsFilter(props, Box.propTypes);
  // const _gridProps = usePropsFilter(props, Grid.propTypes);
  const dataKeys = scheme.map(s => s.dataKey);
  const checkRow = (_, e) => {
    const { checked, value } = e.target;
    const rows = checked
      ? [...new Set([...checkedRows, value])]
      : checkedRows.filter(k => k !== value);
    setCheckedRows(rows);
    if (onCheck) onCheck(rows);
  };

  const toggleSelectAll = checked => {
    const rows = checked ? data.map(d => d[idKey]?.toString()) : [];
    setCheckedRows(rows);
    if (onCheck) onCheck(rows);
  };

  const isRowChecked = id => {
    return checkedRows.indexOf(id) >= 0;
  };

  const shouldSelectAllChecked = () => {
    return data.length !== 0 && data.length === checkedRows.length;
  };

  const colSpan = scheme.length + (useCheckbox ? 1 : 0);

  return (
    <Table {..._boxProps}>
      <colgroup>
        {useCheckbox && <CheckboxColGroup />}
        {scheme.map((col, i) => (
          <col key={`col-${col}-${i}`} />
        ))}
      </colgroup>
      {// header row
      !hideHeader && (
        <THead>
          <TR as="tr">
            {/* the 'select-all' checkbox */}
            {useCheckbox && (
              <TH textAlign="center">
                <Box display="inline-block">
                  <Checkbox
                    checked={shouldSelectAllChecked()}
                    onChange={toggleSelectAll}
                  />
                </Box>
              </TH>
            )}

            {scheme.map((hd, i) => (
              <TH key={`hd-${hd}-${i}`}>{hd.title}</TH>
            ))}
          </TR>
        </THead>
      )}
      <TBody>
        {data.map((item, index) => {
          const itemId = item[idKey] ? item[idKey].toString() : `row-${index}`;
          return (
            <TR key={index} data-id={itemId}>
              {useCheckbox && (
                <TD textAlign="center">
                  <Box display="inline-block">
                    <Checkbox
                      value={itemId}
                      checked={isRowChecked(itemId)}
                      onChange={checkRow}
                    />
                  </Box>
                </TD>
              )}
              {dataKeys.map((dk, ci) => {
                const raw = item[dk] || null;
                const value = renderColumn ? renderColumn(dk, raw, item) : raw;
                return <TD key={`dk-${ci}`}>{value || ''}</TD>;
              })}
            </TR>
          );
        })}
        {(!data || data.length === 0) && (
          <EmptyView colSpan={colSpan} customView={emptyView} />
        )}
      </TBody>
    </Table>
  );
});

DataTable.displayName = 'DataTable';

const SkeletonLine = styled(Skeleton)`
  height: 2rem;
  margin-right: ${themeGet('space.m', '4px')};
`;

const SkeletonRow = () => (
  <Row mt="l">
    <SkeletonLine flex={2} />
    <SkeletonLine flex={5} />
    <SkeletonLine flex={1} />
    <SkeletonLine flex={1} />
  </Row>
);

DataTable.skeleton = props => {
  const _boxProps = usePropsFilter(props, Box.propTypes);
  return (
    <Box {..._boxProps}>
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </Box>
  );
};

DataTable.skeleton.displayName = 'DataTable_Skeleton';

DataTable.propTypes = {
  ...Box.propTypes,
  scheme: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dataKey: PropTypes.string,
    }).isRequired,
  ),
  data: PropTypes.array.isRequired,
  idKey: PropTypes.string,
  renderColumn: PropTypes.func,
  hideHeader: PropTypes.bool,
  useCheckbox: PropTypes.bool,
  defaultCheckedRows: PropTypes.array,
  onCheck: PropTypes.func,
  emptyView: PropTypes.node,
};

DataTable.defaultProps = {
  data: [],
  scheme: [],
  idKey: 'id',
  defaultCheckedRows: [],
};

export { DataTable };

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import T from '../typography';
import { Table } from './table';

const { TR, TD } = Table;

const EmptyView = props => {
  const { colSpan, customView } = props;
  return (
    <TR>
      <TD colSpan={colSpan}>
        {customView ? (
          customView
        ) : (
          <Box pt="l" pb="l" textAlign="center">
            <T.Subtitle2 color="#C7C7C7">No Data</T.Subtitle2>
          </Box>
        )}
      </TD>
    </TR>
  );
};

EmptyView.propTypes = {
  colSpan: PropTypes.number.isRequired,
  customView: PropTypes.node,
};

export default EmptyView;

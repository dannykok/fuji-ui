import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@fuji-ui/core';

const DocPage = props => {
  return (
    <Box role="page" flex={1} pt="l" pb="l" overflowY="auto">
      <Box
        maxWidth={[null, null, null, 960]}
        mx="auto"
        px={['s', 'm', 'l', null]}
      >
        {props.children}
      </Box>
    </Box>
  );
};

DocPage.propTypes = {
  children: PropTypes.node,
};

export default DocPage;

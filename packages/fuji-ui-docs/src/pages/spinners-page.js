import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Box, Spinner } from '@fuji-ui/core';

const SpinnersPage = props => {
  return (
    <DocPage>
      <T.H1>Spinners</T.H1>
      <Box mt="l">
        <Box mt="l">
          <T.H1>
            <Spinner bg="white" />
          </T.H1>
        </Box>
        <Box mt="l">
          <Spinner color="#A9A9A9" fontSize="4rem" bg="white" />
        </Box>
        <Box mt="l">
          <Spinner color="onSecondary" bg="white" />
        </Box>
      </Box>
    </DocPage>
  );
};

export default SpinnersPage;

import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Box, NumberBadge } from '@fuji-ui/core';

const NumberBadgesPage = props => {
  return (
    <DocPage>
      <T.H1>Number Badges</T.H1>
      <Box mt="l">
        <Box mt="l">
          <T.Subtitle1>Variants</T.Subtitle1>
          <Box mt="s">
            <NumberBadge>1</NumberBadge>
            <NumberBadge variant="unread" ml="m">
              18
            </NumberBadge>
          </Box>
        </Box>
        <Box mt="l">
          <T.Subtitle1>Different Sizes</T.Subtitle1>
          <Box mt="s">
            <NumberBadge size="xs">1</NumberBadge>
            <NumberBadge size="s" ml="m">
              1
            </NumberBadge>
            <NumberBadge size="m" ml="m">
              2
            </NumberBadge>
            <NumberBadge size="l" ml="m">
              33
            </NumberBadge>
          </Box>
        </Box>
      </Box>
    </DocPage>
  );
};

export default NumberBadgesPage;

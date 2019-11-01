import React, { useState } from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Box,
  Row,
  Column,
  Button,
  InputGroup,
} from '@fuji-ui/core';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ButtonRow = styled(Row)`
  margin-top: ${themeGet('space.m', '8px')};
  > button:not(:first-child) {
    margin-left: ${themeGet('space.s', '4px')};
  }
`;

const renderButtonSet = props => {
  return (
    <ButtonRow>
      <Button variant="primary" {...props}>
        <span role="img" aria-label="like">
          👍 Primary
        </span>
      </Button>
      <Button variant="secondary" {...props}>
        Secondary
      </Button>
      <Button variant="plain" {...props}>
        Plain
      </Button>
      <Button variant="danger" {...props}>
        Danger
      </Button>
      <Button variant="primary" circle {...props}>
        <span role="img" aria-label="like">
          👍
        </span>
      </Button>
      <Button variant="secondary" circle {...props}>
        <span role="img" aria-label="like">
          👍
        </span>
      </Button>
    </ButtonRow>
  );
};

const ButtonsPage = props => {
  const [buttonStates, setButtonStates] = useState([false, false, false]);
  return (
    <DocPage>
      <T.H1>Buttons</T.H1>
      <Column>
        {renderButtonSet({ size: 's' })}
        {renderButtonSet({ size: 's', disabled: true })}
        {renderButtonSet({ size: 'm' })}
        {renderButtonSet({ size: 'l' })}
        <Box mt="l">
          <T.Subtitle1>Loading state</T.Subtitle1>
          <InputGroup direction="row">
            <Button
              isLoading={buttonStates[0]}
              onClick={() => {
                setButtonStates(state => [true, false, false]);
                console.log('clicked');
              }}
            >
              Click me
            </Button>
            <Button
              variant="secondary"
              isLoading={buttonStates[1]}
              onClick={() => setButtonStates(state => [false, true, false])}
            >
              Click me
            </Button>
            <Button
              variant="danger"
              isLoading={buttonStates[2]}
              onClick={() => setButtonStates(state => [false, false, true])}
            >
              Click me
            </Button>
          </InputGroup>
        </Box>
      </Column>
    </DocPage>
  );
};

export default ButtonsPage;

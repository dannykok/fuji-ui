import React from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Row,
  TextInput,
  Select,
  Datepicker,
  Button,
  Box,
  InputGroup,
} from '@fuji-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputPage = props => {
  return (
    <DocPage>
      <T.H1>InputGroup</T.H1>
      <T.P>
        To group multiple input components, applying the same size props and
        align them into row or column.
      </T.P>

      <Row flexWrap="wrap">
        <Box p="m">
          <T.Subtitle1>Horizontal (row)</T.Subtitle1>
          <InputGroup>
            <TextInput
              placeholder="Search"
              direction="row"
              icon={<FontAwesomeIcon icon={faSearch} />}
            />
            <Button>Go</Button>
          </InputGroup>
        </Box>
        <Box p="m">
          <T.Subtitle1>Horizontal and wrapping (row-wrap)</T.Subtitle1>
          <InputGroup>
            <TextInput
              placeholder="Search"
              direction="row-wrap"
              icon={<FontAwesomeIcon icon={faSearch} />}
            />
            <Button>Go</Button>
          </InputGroup>
        </Box>

        <Box p="m">
          <T.Subtitle1>Align input size</T.Subtitle1>
          <InputGroup size="m">
            <TextInput placeholder="Filter" />
            <Datepicker />
            <Select />
            <Button>Go</Button>
          </InputGroup>
        </Box>
        <Box p="m">
          <T.Subtitle1>Vertical (column)</T.Subtitle1>
          <InputGroup direction="column" space="m">
            <TextInput placeholder="Username" />
            <TextInput type="password" placeholder="Password" />
            <Button>Login</Button>
          </InputGroup>
        </Box>
        <Box p="m"></Box>
      </Row>
    </DocPage>
  );
};

export default InputPage;

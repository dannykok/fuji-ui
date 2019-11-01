import React from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Row,
  TextInput,
  TextRangeInput,
  List,
  Box,
} from '@fuji-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputPage = props => {
  return (
    <DocPage>
      <T.H1>Input</T.H1>
      <Row flexWrap="wrap">
        <Box p="m">
          <List header="Text input of different sizes">
            <List.Item>
              <TextInput placeholder="Name" size="s" width="120px" />
            </List.Item>
            <List.Item>
              <TextInput placeholder="Type something" size="m" />
            </List.Item>
            <List.Item>
              <TextInput placeholder="Type something" size="l" />
            </List.Item>
            <List.Item>
              <TextInput
                placeholder="Type something"
                size="s"
                icon={<FontAwesomeIcon icon={faSearch} />}
                flex={1}
              />
            </List.Item>
            <List.Item>
              <TextInput placeholder="disabled" disabled flex={1} />
            </List.Item>
            <List.Item>
              <TextInput placeholder="something wrong" error flex={1} />
            </List.Item>
          </List>
        </Box>
        <Box p="m">
          <List header="Range text input">
            <List.Item>
              <TextRangeInput
                icon={<FontAwesomeIcon icon={faCalendar} />}
                placeholder={['start date', 'end date']}
                size="s"
              />
            </List.Item>
            <List.Item>
              <TextRangeInput
                icon={<FontAwesomeIcon icon={faCalendar} />}
                placeholder={['start date', 'end date']}
                size="s"
                width="240px"
              />
            </List.Item>
            <List.Item>
              <TextRangeInput
                icon={<FontAwesomeIcon icon={faCalendar} />}
                value={['2019-12-30']}
                placeholder={['start date', 'end date']}
                disabled={[true, false]}
              />
            </List.Item>
            <List.Item>
              <TextRangeInput
                icon={<FontAwesomeIcon icon={faCalendar} />}
                placeholder={['start date', 'end date']}
                error
              />
            </List.Item>
          </List>
        </Box>
        <Box p="m">
          <List header="Clearable">
            <List.Item>
              <TextInput
                placeholder="Search"
                icon={<FontAwesomeIcon icon={faSearch} />}
                clearable
              />
            </List.Item>
          </List>
        </Box>
        <Box p="m">
          <List header="Multi-line (textarea)">
            <List.Item>
              <TextInput
                multiline
                placeholder="Search"
                spellCheck={false}
                width="360px"
              />
            </List.Item>
            <List.Item>
              <TextInput
                multiline={{ min: '80px', max: '320px' }}
                placeholder="Search"
                spellCheck={false}
                width="360px"
                size="l"
              />
            </List.Item>
          </List>
        </Box>
      </Row>
    </DocPage>
  );
};

export default InputPage;

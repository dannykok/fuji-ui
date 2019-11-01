import React from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Code,
  Box,
  Form,
  TextInput,
  Separator,
} from '@fuji-ui/core';

const SeparatorPage = props => {
  return (
    <DocPage>
      <T.H1>Separator</T.H1>
      <T.P>
        Separator component equivalent to <Code>&lt;hr&gt;</Code> tag.
      </T.P>
      <Box mt="l">
        <T.Subtitle1>Header</T.Subtitle1>
        <Separator space="s" />
        <T.Subtitle1>space=small</T.Subtitle1>
        <Separator space="m" />
        <T.Subtitle1>space=medium</T.Subtitle1>
        <Separator space="l" />
        <T.Subtitle1>space=large</T.Subtitle1>
      </Box>
      <Box mt="l">
        <Form.Item>
          <TextInput placeholder="Name" />
        </Form.Item>
        <Form.Item>
          <TextInput placeholder="email" />
        </Form.Item>
        <Separator />
        <Form.Item>
          <TextInput placeholder="Age" />
        </Form.Item>
        <Form.Item>
          <TextInput placeholder="Occupation" />
        </Form.Item>
      </Box>
    </DocPage>
  );
};

export default SeparatorPage;

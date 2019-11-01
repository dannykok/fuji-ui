import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Card, Row, CodeBlock } from '@fuji-ui/core';

const GettingStartedPage = props => {
  return (
    <DocPage>
      <T.H1>Getting Started</T.H1>
      <T.P>
        Fuji UI is an UI framework on React. Built using styled-system and
        styled-components.
      </T.P>
      <Row mt="l">
        <Card flex={1}>
          <T.H4>Style Guide</T.H4>
          <T.P>Understand the design language of Fuji.</T.P>
        </Card>
        <Card flex={1} ml="l">
          <T.H4>Examples</T.H4>
          <T.P>
            Tons of examples illustrating the use of different components.
          </T.P>
        </Card>
        <Card flex={1} ml="l">
          <T.H4>Contribute</T.H4>
          <T.P>
            Learn the process and requirement to submit changes to the framework
          </T.P>
        </Card>
      </Row>
      <T.H3>Installation</T.H3>
      <CodeBlock>
        {`
# npm install @fuji-ui/core --save // or
# yarn add @fuji-ui/core
        `}
      </CodeBlock>
    </DocPage>
  );
};

export default GettingStartedPage;

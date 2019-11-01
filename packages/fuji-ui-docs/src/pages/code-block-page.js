import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, CodeBlock } from '@fuji-ui/core';

const CodeBlockPage = props => {
  return (
    <DocPage>
      <T.H1>Code Block</T.H1>
      <T.P>Showing code snippet.</T.P>
      { /* prettier-ignore */}
      <CodeBlock>
{`
{/* prettier-ignore */}
const Example = props => {
    return <CodeBlock>{"
        /* some code here */    
    "}</CodeBlock>
};
`}
      </CodeBlock>
    </DocPage>
  );
};

export default CodeBlockPage;

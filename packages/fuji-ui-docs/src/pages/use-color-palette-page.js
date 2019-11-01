import React from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Code,
  CodeBlock,
  List,
  useColorPalette,
  Box,
  Row,
} from '@fuji-ui/core';

const UseColorPalettePage = props => {
  return (
    <DocPage>
      <T.H1>useColorPalette</T.H1>
      <T.P>
        <Code>useColorPalette</Code> takes a <Code>code</Code> param and return
        a hashed color from a built in color palette.
      </T.P>
      {/* prettier-ignore */}
      <CodeBlock>
      {`
// get a default color for avatar/tag/icon
const color = useColorPalette("John");      
`}
      </CodeBlock>
      <List header={<T.Subtitle1>The color palette</T.Subtitle1>}>
        {useColorPalette.colors.map((c, i) => (
          <List.Item key={c}>
            <Row alignItems="center">
              <Box
                width="20px"
                height="20px"
                bg={c}
                display="inline-block"
                mr="s"
              />
              {c}
            </Row>
          </List.Item>
        ))}
      </List>
    </DocPage>
  );
};

export default UseColorPalettePage;

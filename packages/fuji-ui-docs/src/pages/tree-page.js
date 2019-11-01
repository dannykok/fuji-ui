import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Row, Box, Tree } from '@fuji-ui/core';

const TreePage = props => {
  return (
    <DocPage>
      <T.H1>Tree</T.H1>
      <T.P>Directory-like expandable list view.</T.P>
      <Row mt="l">
        <Box p="s">
          <T.Subtitle1>Tree</T.Subtitle1>
          <Tree>
            <Tree.Node id="f1" label="Folder 1">
              <Tree.Node id="sf1" label="Subfolder 1">
                <Tree.Node id="file-a" label="File A" />
                <Tree.Node id="file-b" label="File B" />
              </Tree.Node>
              <Tree.Node id="sf2" label="Subfolder 2">
                <Tree.Node id="file-c" label="File C" />
                <Tree.Node id="file-d" label="File D" />
              </Tree.Node>
            </Tree.Node>
            <Tree.Node id="file-e" label="File E" />
            <Tree.Node id="f2" label="Folder 2">
              <Tree.Node id="file-f" label="File F" />
            </Tree.Node>
          </Tree>
        </Box>
        <Box ml="l" p="s">
          <T.Subtitle1>Default expanded</T.Subtitle1>
          <Tree>
            <Tree.Node id="f1" label="Folder 1" defaultExpanded>
              <Tree.Node id="sf1" label="Subfolder 1" defaultExpanded>
                <Tree.Node id="file-a" label="File A" />
                <Tree.Node id="file-b" label="File B" />
              </Tree.Node>
              <Tree.Node id="sf2" label="Subfolder 2">
                <Tree.Node id="file-c" label="File C" />
                <Tree.Node id="file-d" label="File D" />
              </Tree.Node>
            </Tree.Node>
            <Tree.Node id="file-e" label="File E" />
            <Tree.Node id="f2" label="Folder 2">
              <Tree.Node id="file-f" label="File F" />
            </Tree.Node>
          </Tree>
        </Box>
      </Row>
    </DocPage>
  );
};

export default TreePage;

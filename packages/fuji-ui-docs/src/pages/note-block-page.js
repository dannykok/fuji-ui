import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, NoteBlock } from '@fuji-ui/core';

const NoteBlockPage = props => {
  return (
    <DocPage>
      <T.H1>Note Block</T.H1>
      <T.P>A note section for supplementary content</T.P>
      <NoteBlock width="240px">
        <T.Subtitle1>Pro Tips</T.Subtitle1>
        <T.P>Press ctrl+m to directly reply message.</T.P>
      </NoteBlock>
    </DocPage>
  );
};

export default NoteBlockPage;

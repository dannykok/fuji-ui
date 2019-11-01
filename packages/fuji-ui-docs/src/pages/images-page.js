import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Image, List } from '@fuji-ui/core';

const ImagesPage = props => {
  return (
    <DocPage>
      <T.H1>Images</T.H1>
      <List>
        <List.Item>
          <Image
            width="320px"
            src="https://source.unsplash.com/random/400x300"
            alt="sample_image"
          />
        </List.Item>
        <List.Item>
          <Image
            rounded
            width="320px"
            src="https://source.unsplash.com/random/400x300"
            alt="sample_image"
          />
        </List.Item>
        <List.Item>
          <Image.Circular
            width="320px"
            height="320px"
            src="https://source.unsplash.com/random/400x300"
            alt="sample_image"
          />
        </List.Item>
      </List>
    </DocPage>
  );
};

export default ImagesPage;

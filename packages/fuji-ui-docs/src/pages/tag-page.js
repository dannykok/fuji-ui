import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, List, TagGroup, Tag, Code } from '@fuji-ui/core';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const TagPage = props => {
  return (
    <DocPage>
      <T.H1>Tag</T.H1>
      <T.P>Simple tags representation, using the built-in color palette.</T.P>
      <List mt="l">
        <List.Item>
          <Tag>Status</Tag>
          <Tag bg="green" color="white">
            Success
          </Tag>
          <Tag bg="red" color="white">
            Failed
          </Tag>
          <Tag bg="navy" color="white">
            Published
          </Tag>
        </List.Item>
      </List>
      <List
        header={
          <T.Subtitle1>
            Use <Code>tagId</Code> to let component hash a color from the
            palette.
          </T.Subtitle1>
        }
      >
        <List.Item>
          <Tag tagId="John" color="white">
            John
          </Tag>
          <Tag tagId="Mary" color="white">
            Mary
          </Tag>
          <Tag tagId="Moris" color="white">
            Moris
          </Tag>
        </List.Item>
      </List>
      <List
        header={
          <T.Subtitle1>
            Using <Code>TagGroup</Code>
          </T.Subtitle1>
        }
      >
        <List.Item>
          <TagGroup>
            <Tag>Status</Tag>
            <Tag bg="green" color="white">
              Success
            </Tag>
            <Tag bg="red" color="white">
              Failed
            </Tag>
          </TagGroup>
        </List.Item>
      </List>
      <List header={<T.Subtitle1>Different Size</T.Subtitle1>}>
        <List.Item>
          <Tag size="s">Small</Tag>
        </List.Item>
        <List.Item>
          <Tag size="m">Medium</Tag>
        </List.Item>
        <List.Item>
          <Tag size="l">Large</Tag>
        </List.Item>
      </List>
    </DocPage>
  );
};

export default TagPage;

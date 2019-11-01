import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Avatar, List } from '@fuji-ui/core';
import AvatarPic from '../resources/images/sample-avatar.jpg';

const AvatarPage = props => {
  return (
    <DocPage>
      <T.H1>Avatar</T.H1>
      <List>
        <List.Item>
          <Avatar
            size="xs"
            src={AvatarPic}
            alt="avatar"
            onClick={() => alert('clicked')}
          />

          <Avatar size="xs" name="Miguel" />
        </List.Item>
        <List.Item>
          <Avatar
            size="s"
            src={AvatarPic}
            alt="avatar"
            onClick={() => alert('clicked')}
          />
          <Avatar size="s" name="Miguel" />
        </List.Item>
        <List.Item>
          <Avatar size="m" src={AvatarPic} alt="avatar" />
          <Avatar size="m" name="Miguel" />
        </List.Item>
        <List.Item>
          <Avatar size="l" src={AvatarPic} alt="avatar" />
          <Avatar size="l" name="Miguel" />
        </List.Item>
        <List.Item>
          <Avatar size="xl" src={AvatarPic} alt="avatar" />
          <Avatar size="xl" name="Miguel" />
        </List.Item>
        <List.Item>
          <Avatar size="xxl" src={AvatarPic} alt="avatar" />
          <Avatar size="xxl" name="Miguel" />
        </List.Item>
        <List.Item>
          <Avatar size="180px" src={AvatarPic} alt="avatar" />
          <Avatar size="180px" name="Miguel" />
        </List.Item>
      </List>
    </DocPage>
  );
};

export default AvatarPage;

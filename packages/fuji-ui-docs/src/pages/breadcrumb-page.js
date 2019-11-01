import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Breadcrumb, Box, Avatar } from '@fuji-ui/core';
import { Link } from 'react-router-dom';

const { Item } = Breadcrumb;

const BreadcrumbPage = props => {
  return (
    <DocPage>
      <T.H1>Breadcrumb</T.H1>
      <T.P>Used to make multi-level navigation easier.</T.P>
      <Breadcrumb mt="l">
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/">Settings</Link>
        </Item>
        <Item>Account &amp; Billing</Item>
      </Breadcrumb>
      <Breadcrumb mt="l">
        <Item>
          <Link to="/">Dashboard</Link>
        </Item>
        <Item>
          <Link to="/">Users</Link>
        </Item>
        <Item>
          <Avatar size="xs" name="Miguel" /> Miguel
        </Item>
      </Breadcrumb>
    </DocPage>
  );
};

export default BreadcrumbPage;

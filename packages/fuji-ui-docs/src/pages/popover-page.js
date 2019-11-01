import React, { useState } from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Avatar,
  Popover,
  Row,
  Box,
  List,
  Select,
} from '@fuji-ui/core';
import AvatarPic from '../resources/images/sample-avatar.jpg';

const Menu = props => (
  <Box>
    <T.H3>Whooop!</T.H3>
    <T.P>This is an uncontrolled popover component</T.P>
  </Box>
);

const anchorProps = [
  'top',
  'bottom',
  'left',
  'right',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom',
];

const PopoverPage = props => {
  const [anchor, setAnchor] = useState('top');
  return (
    <DocPage>
      <T.H1>Popover</T.H1>
      <Box mt="l">
        <Row width="50%" justifyContent="space-around" alignItems="center">
          <Popover anchor="bottom" menu={<Menu />}>
            <Avatar size="s" src={AvatarPic} alt="avatar" />
          </Popover>
          <Popover anchor="bottom" menu={<Menu />}>
            <Avatar size="l" src={AvatarPic} alt="avatar" />
          </Popover>
        </Row>
      </Box>
      <Box mt="l">
        <T.H2>The anchor system</T.H2>
        <T.P>The available achor values are:</T.P>
        <Box>
          <Select defaultValue="top" onChange={v => setAnchor(v)}>
            {anchorProps.map(a => (
              <Select.Option key={a} label={a} value={a}>
                {a}
              </Select.Option>
            ))}
          </Select>
        </Box>
        <Row
          width="100%"
          justifyContent="center"
          p={120}
          border="1px solid black"
        >
          <Popover anchor={anchor} menu={<Menu />} popped={true}>
            <Avatar size="l" src={AvatarPic} alt="avatar" />
          </Popover>
        </Row>
      </Box>
    </DocPage>
  );
};

export default PopoverPage;

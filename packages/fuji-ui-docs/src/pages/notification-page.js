import React, { useContext } from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  InputGroup,
  Box,
  Button,
  useNotification,
} from '@fuji-ui/core';

const NotificationPage = props => {
  const { notify, dismiss } = useNotification();
  return (
    <DocPage>
      <T.H1>Notification</T.H1>
      <T.P>A temporary message popup, with custom messages and type</T.P>
      <InputGroup>
        <Button variant="primary" onClick={() => notify('Hi there!')}>
          Try me
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            notify({
              type: 'plain',
              title: 'A Sample message',
              message: 'This is the message body that you may add text to.',
            })
          }
        >
          Sample message
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            notify({
              type: 'warning',
              message:
                'Your payment is overdued. Please visit the page and update payment details.',
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="danger"
          onClick={() =>
            notify({
              type: 'error',
              title: 'Fail to import users',
              message: "Duplicated ID's found",
            })
          }
        >
          Error
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            notify({
              type: 'success',
              title: 'Your profile has been updated.',
            })
          }
        >
          success
        </Button>
      </InputGroup>
      <Box mt="m">
        <T.Subtitle1>Static</T.Subtitle1>
        <Button
          variant="primary"
          onClick={() =>
            notify({
              key: 'UPDATE',
              type: 'plain',
              static: true,
              title: 'An update has been available',
              actions: [
                <Button onClick={() => dismiss('UPDATE')}>Refresh</Button>,
              ],
            })
          }
        >
          A static notification
        </Button>
      </Box>
    </DocPage>
  );
};

export default NotificationPage;

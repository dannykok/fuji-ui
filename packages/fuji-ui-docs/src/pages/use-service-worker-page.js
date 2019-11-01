import React from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Code, CodeBlock, NoteBlock } from '@fuji-ui/core';

const UseServiceWorkerPage = props => {
  return (
    <DocPage>
      <T.H1>useServiceWorker</T.H1>
      <T.P>
        This hook is to register service worker, at the same time check for
        service worker update. This should replace the use of{' '}
        <Code>serviceWorker.register()</Code> call in CRA's index.html.
        Encapsulate the logic in a hook can help managing the trigger of
        checking app update, and allow user to be acknowledged by visual prompt
        (notification)
      </T.P>
      <NoteBlock>
        Set checkInterval = 0 to suppress the periodic check.
      </NoteBlock>
      <NoteBlock>
        Remember to remove serviceWorker.unregister()/register() from index.html
        if you are using Create React App.
      </NoteBlock>
      {/* prettier-ignore */}
      <CodeBlock>
      {`
// use the exported functions from CRA's built-in service-worker.js
import { register, unregister } from './service-worker.js';
import { useNotification } from '@fuji-ui/core'

const App = () => {
  const { notify, dismiss } = useNotification();
  useServiceWorker({
    register,
    unregister,
    checkInterval: 86400000, // check every 24 hours
    onUpdate: performUpdate => {
      notify({
        type: 'plain',
        title: 'An update version is available',
        message: 'This is the message body that you may add text to.',
        actions: [
          <Button
            onClick={() => {
              performUpdate();
              dismiss();
            }}
          >
            Refresh
          </Button>,
        ],
      },
  });
}
`}
      </CodeBlock>
    </DocPage>
  );
};

export default UseServiceWorkerPage;

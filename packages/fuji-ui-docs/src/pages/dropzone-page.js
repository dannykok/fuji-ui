import React, { useState } from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Button, Box, Modal, Dropzone } from '@fuji-ui/core';

const DropzonePage = props => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  const handleUpload = () => {
    return new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
        clearTimeout(wait);
        resolve();
      }, 3000);
    });
  };

  return (
    <DocPage>
      <T.H1>Dropzone</T.H1>
      <T.P>
        A dropzone area where user upload files by dragging files into it.
      </T.P>
      <Box mt="l">
        <Dropzone handleUpload={handleUpload} />
      </Box>
      <Box mt="l">
        <Modal
          show={showModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        >
          <Dropzone handleUpload={handleUpload} />
        </Modal>
        <Button onClick={() => setShowModal(true)}>Click to show modal</Button>
      </Box>
    </DocPage>
  );
};

export default DropzonePage;

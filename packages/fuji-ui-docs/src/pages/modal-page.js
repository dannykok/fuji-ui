import React, { useState } from 'react';
import DocPage from '../components/doc-page';
import { Typography as T, Button, Box, Modal } from '@fuji-ui/core';

const ModalPage = props => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <DocPage>
      <T.H1>Modal</T.H1>
      <T.P>
        A temporary dialog used to collect data or confirm user's actions.
      </T.P>
      <Box mt="l">
        <Modal
          show={showModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        >
          <T.H4>Discard the item?</T.H4>
          <T.P>You won't be charged if you discard the item now.</T.P>
        </Modal>
        <Button onClick={() => setShowModal(true)}>Click to show modal</Button>
      </Box>
    </DocPage>
  );
};

export default ModalPage;

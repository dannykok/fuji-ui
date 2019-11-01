import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { Button } from '../button';
import { Row, Column } from '../flex';
import { Card } from '../card';
import { InputGroup } from '../input-group';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ModalWrapper = styled(Box)`
  display: inline-block;
  margin: ${themeGet('space.l', '8px')};
`;

const Dimmer = styled(Row)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: all 0.3s;
`;

const Modal = props => {
  const {
    show,
    onConfirm,
    onCancel,
    confirmLabel,
    cancelLabel,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
  } = props;

  const doConfirm = () => {
    if (onConfirm) onConfirm();
  };

  const doCancel = () => {
    if (onCancel) onCancel();
  };

  return (
    <Dimmer show={show}>
      <ModalWrapper>
        <Card
          minWidth={minWidth}
          maxWidth={maxWidth}
          minHeight={minHeight}
          maxHeight={maxHeight}
        >
          <Column>
            <Box flex={1}>{props.children}</Box>
            <Row justifyContent="flex-end" mt="l">
              <InputGroup>
                <Button variant="secondary" onClick={doCancel} minWidth="80px">
                  {cancelLabel}
                </Button>
                <Button onClick={doConfirm} minWidth="80px">
                  {confirmLabel}
                </Button>
              </InputGroup>
            </Row>
          </Column>
        </Card>
      </ModalWrapper>
    </Dimmer>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
};

Modal.defaultProps = {
  confirmLabel: 'OK',
  cancelLabel: 'Cancel',
  minWidth: '240px',
  minHeight: '80px',
};

export { Modal };

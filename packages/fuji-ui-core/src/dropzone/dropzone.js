import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import T from '../typography';
import { Box } from '../box';
import { Row, Column } from '../flex';
import { Button } from '../button';
import { Spinner } from '../spinner';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { themeGet } from '@styled-system/theme-get';
import is from 'styled-is';

const DropzoneWrapper = styled(Box)`
  flex: 1;
  min-height: 240px;
  padding: ${themeGet('space.m', '16px')};
  border-style: dashed;
  border-width: ${themeGet('borderWidths.input', '1px')};
  border-color: ${themeGet('colors.border')};
  border-radius: ${themeGet('radii.m')};
  input[type='file'] {
    display: none;
  }
  svg {
    transition: all 0.3s;
  }
  ${is('highlight')`
    border-style: solid;
    border-color: ${themeGet('colors.primary')};
    svg { 
        color: ${themeGet('colors.primary')};
    }
  `}
`;

const fileListToArray = files => {
  const array = [];
  for (var i = 0; i < files.length; i++) {
    array.push(files.item(i));
  }
  return array;
};

const Dropzone = props => {
  const { disabled, accept, multiple, handleUpload } = props;
  const fileInputRef = useRef();
  const [highlight, setHighlight] = useState(false);
  const [files, setFiles] = useState({ status: 'pending' });

  const onFilesAdd = evt => {
    if (disabled) return;
    uploadFiles(evt.target.files);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const onDragOver = evt => {
    evt.preventDefault();
    if (disabled) return;
    setHighlight(true);
  };

  const onDragLeave = evt => {
    evt.preventDefault();
    setHighlight(false);
  };

  const onDrop = evt => {
    evt.preventDefault();
    if (disabled) return;
    uploadFiles(event.dataTransfer.files);
    setHighlight(false);
  };

  const uploadFiles = f => {
    if (handleUpload) {
      // change files to array
      const _files = fileListToArray(f);
      setFiles({ status: 'uploading', data: _files });
      handleUpload(_files)
        .then(() => {
          setFiles({ status: 'pending' });
        })
        .catch(() => {
          setFiles({ status: 'pending' });
        });
    }
  };

  const renderPending = () => {
    return (
      <>
        <T.Span>Drag and drop files from your computer</T.Span>
        <Button
          variant="secondary"
          mt="m"
          onClick={openFileDialog}
          disabled={disabled}
        >
          Choose file
        </Button>
      </>
    );
  };

  const renderUploading = () => {
    if (files.data?.length > 1) {
      return <T.Span>Uploading {files.data.length} files</T.Span>;
    } else {
      return (
        <Row alignItems="center">
          <Spinner size={20} color="#A9A9A9" />
          <T.Span ml="m">Uploading {files.data[0].name}</T.Span>
        </Row>
      );
    }
  };

  return (
    <DropzoneWrapper
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      highlight={highlight}
    >
      <Column alignItems="center" justifyContent="center">
        <T.Span fontSize="80px" color="#DDD">
          <FontAwesomeIcon icon={faCloudUploadAlt} />
        </T.Span>
        {files.status === 'pending' && renderPending()}
        {files.status === 'uploading' && renderUploading()}
      </Column>
      <input
        ref={fileInputRef}
        className="FileInput"
        type="file"
        multiple={multiple}
        onChange={onFilesAdd}
        accept={accept}
      />
    </DropzoneWrapper>
  );
};

Dropzone.displayName = 'Dropzone';

Dropzone.propTypes = {
  disabled: PropTypes.bool,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  handleUpload: PropTypes.func,
};

export { Dropzone };

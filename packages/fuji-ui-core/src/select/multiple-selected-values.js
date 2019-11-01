import React from 'react';
import PropTypes from 'prop-types';
import valuePropTypes from './value-prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Row } from '../flex';
import { Tag } from '../tag';

const Input = styled.input.attrs({ type: 'text' })`
  flex: 1;
  min-width: 60px;
  background: transparent;
  border: 0;
  outline: none;
  font: inherit;
  margin-left: ${themeGet('space.xs', '2px')};
`;

const STag = props => (
  <Tag
    {...props}
    bg="primary"
    color="onPrimary"
    mx="2px"
    my="1px"
    alignSelf="stretch"
  />
);

const MultipleSelectedValues = props => {
  const {
    values = [],
    placeholder,
    text,
    size,
    onDeleteValue,
    onTextChange,
  } = props;
  const showPlaceholder = values.length === 0;

  const handleDeleteValue = tagId => {
    const value = tagId;
    if (onDeleteValue) onDeleteValue(value);
  };

  const handleKeydown = (e, text) => {
    // del -> remove previous selected values
    if (e.keyCode === 8) {
      if (text === '' && values.length > 0) {
        const { value } = values[values.length - 1];
        console.log('tabId', value);
        onDeleteValue(value);
      }
    }
  };

  return (
    <Row flexWrap="wrap" width="100%">
      {values?.map(v => (
        <STag
          size={size}
          tagId={v.value}
          key={v.value}
          onClickDelete={handleDeleteValue}
        >
          {v.label}
        </STag>
      ))}
      <Input
        placeholder={showPlaceholder ? placeholder : undefined}
        onChange={onTextChange}
        value={text}
        onKeyDown={e => handleKeydown(e, text)}
      />
    </Row>
  );
};

MultipleSelectedValues.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  values: PropTypes.arrayOf(valuePropTypes),
  placeholder: PropTypes.string,
  text: PropTypes.string,
  onDeleteValue: PropTypes.func,
  onTextChange: PropTypes.func,
};

export default MultipleSelectedValues;

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { Selectable } from '../selectable';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

const Scrollable = styled(Box)`
  padding: 2rem 0;
  min-height: 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & + & {
    border-width: ${themeGet('borderWidths.separator', '1px')};
    border-left-style: solid;
    border-color: ${themeGet('colors.border', '#EEEEEE')};
  }
`;

const ScrollSelectable = styled(Selectable)`
  display: block;
  border: 0;
`;

const ScrollSelect = props => {
  const { selectedItem, onSelect } = props;
  return (
    <Scrollable {...props}>
      {props.data.map((item, index) => (
        <ScrollSelectable
          key={index}
          as="a"
          onClick={() => onSelect(item)}
          selected={item === selectedItem}
        >
          {item}
        </ScrollSelectable>
      ))}
    </Scrollable>
  );
};

ScrollSelect.propTypes = {
  data: PropTypes.array,
  selectedItem: PropTypes.string,
  onSelect: PropTypes.func,
};

export default ScrollSelect;

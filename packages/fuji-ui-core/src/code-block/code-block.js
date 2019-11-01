import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Code = styled.code`
  font-family: ${themeGet('fonts.monospace', 'monospace')};
  font-size: 0.85rem;
  background-color: #eeeeee;
`;

const Pre = styled.pre`
  display: block;
  padding: ${themeGet('space.m', '6px')};
  background-color: #eeeeee;
  font-size: 0.85rem;
  line-height: 1.4;
`;

const CodeBlock = props => {
  return (
    <Pre>
      <Code>{props.children.trim()}</Code>
    </Pre>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.string,
};

export { Pre, Code, CodeBlock };

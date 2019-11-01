import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { themeGet } from '@styled-system/theme-get';
import is from 'styled-is';
import { Box } from '../box';
import { usePropsFilter } from '../hooks';

const TreeWrapper = styled(Box).attrs({ role: 'tree' })`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TreeNodeWrapper = styled(Box).attrs({ role: 'tree-node' })`
  display: list-item;
  > ul {
    margin-left: 1rem;
  }
`;

const TreeNodeLabel = styled.span`
  padding: 0.4rem 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
  > i {
    text-align: center;
    width: 32px;
    margin-right: ${themeGet('space.s', '4px')};
  }
  > label {
    &:first-child {
      margin-left: calc(32px + ${themeGet('space.s', '4px')});
    }
    flex: 1;
    display: inline-block;
    cursor: pointer;
    border-radius: ${themeGet('radii.s', '2px')};
    ${is('selected')`
      color: ${themeGet('colors.primary', 'blue')};
      font-weight: 700;
    `}
  }
`;

const IconAngleRight = props => (
  <FontAwesomeIcon icon={faAngleRight} {...props} />
);

const IconAngleDown = props => (
  <FontAwesomeIcon icon={faAngleDown} {...props} />
);

const Tree = props => {
  const { defaultSelectedNode, onSelect } = props;
  const [selectedNode, setSelectedNode] = useState(defaultSelectedNode);

  const setSelected = id => {
    setSelectedNode(id);
    if (onSelect) onSelect(id);
  };

  return (
    <Box {...usePropsFilter(props, Box.propTypes)}>
      <TreeRoot selectedNode={selectedNode} setSelected={setSelected}>
        {props.children}
      </TreeRoot>
    </Box>
  );
};

const TreeRoot = props => {
  const { selectedNode, setSelected } = props;
  return (
    <TreeWrapper as="ul">
      {React.Children.map(props.children, c =>
        React.cloneElement(c, {
          selectedNode,
          setSelected,
        }),
      )}
    </TreeWrapper>
  );
};

const ExpandableTreeNodeLabel = ({ label, expanded, onClick }) => {
  return (
    <TreeNodeLabel onClick={onClick}>
      <i>{expanded ? <IconAngleDown /> : <IconAngleRight />}</i>
      <label>{label}</label>
    </TreeNodeLabel>
  );
};

const SelectableTreeNodeLabel = ({ label, selected, onClick }) => {
  return (
    <TreeNodeLabel selected={selected} onClick={onClick}>
      <label>{label}</label>
    </TreeNodeLabel>
  );
};

const TreeNode = props => {
  const { id, children, label, defaultExpanded, onExpand } = props;
  const { selectedNode, setSelected } = props;
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <TreeNodeWrapper as="li" {...usePropsFilter(props, Box.propTypes)}>
      {children ? (
        <>
          <ExpandableTreeNodeLabel
            label={label}
            expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
              if (onExpand) onExpand();
            }}
          />
          {expanded && (
            <TreeRoot selectedNode={selectedNode} setSelected={setSelected}>
              {children}
            </TreeRoot>
          )}
        </>
      ) : (
        <SelectableTreeNodeLabel
          label={label}
          selected={selectedNode === id}
          onClick={() => setSelected(id)}
        />
      )}
    </TreeNodeWrapper>
  );
};

Tree.displayName = 'Tree';
TreeNode.displayName = 'TreeNode';

Tree.propTypes = {
  children: PropTypes.node,
  defaultSelectedNode: PropTypes.string,
  onSelect: PropTypes.func,
};

TreeNode.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  defaultExpanded: PropTypes.bool,
  onExpand: PropTypes.func,
  selectedNode: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
};

TreeRoot.propTypes = {
  selectedNode: PropTypes.string,
  setSelected: PropTypes.func,
  children: PropTypes.node,
};

ExpandableTreeNodeLabel.propTypes = {
  label: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

SelectableTreeNodeLabel.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Tree.Node = TreeNode;

export { Tree };

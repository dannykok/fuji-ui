import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { Span } from '../typography';
import { useColorPalette, usePropsExclude } from '../hooks';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Tag = props => {
  const { tagId, size, onClickDelete } = props;

  var spanProps = {};
  if (tagId) {
    spanProps.bg = useColorPalette(tagId.toString());
  }
  switch (size) {
    case 's':
      spanProps.p = 'xs';
      spanProps.fontSize = 'xxs';
      break;
    case 'm':
      spanProps.p = 'xs';
      spanProps.fontSize = 'xs';
      break;
    case 'l':
      spanProps.p = 's';
      spanProps.fontSize = 's';
      break;
  }

  return (
    <Span
      display="inline-block"
      borderRadius="s"
      fontWeight="700"
      {...spanProps}
      {...usePropsExclude(props, ['onClickDelete', 'tagId'])}
    >
      {props.children}
      {onClickDelete && (
        <Box
          display="inline-block"
          px="xs"
          ml="xs"
          onClick={() => onClickDelete(tagId)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </Box>
      )}
    </Span>
  );
};

const TagGroup = styled(Box)`
  span {
    margin-left: ${themeGet('space.xs', '2px')};
  }
`;

Tag.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  bg: PropTypes.string,
  // hash of tagId string will be used to fit a color for the tag
  tagId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['s', 'm', 'l']),
  onClickDelete: PropTypes.func,
};

Tag.defaultProps = {
  bg: 'secondary',
  size: 'm',
};

export { Tag, TagGroup };

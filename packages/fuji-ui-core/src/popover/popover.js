import React, {
  Children,
  cloneElement,
  useState,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../box';
import { Card } from '../card';
import { usePropsFilter } from '../hooks';
import { inputSizes } from '@fuji-ui/theme';

// prettier-ignore
const PopoverCard = styled(Card)`
  position: absolute;
  display: block;
  min-width: 200px;
  z-index: 999;
  ${({ anchor }) => anchor.startsWith('bottom') ? `
    top: 100%;
  `: ''}
  ${({ anchor }) => anchor.startsWith('top') ? `
    bottom: 100%;
  `: ''}
  ${({ anchor }) => anchor.endsWith('Bottom') ? `
    top: 0;
  `: ''}
  ${({ anchor }) => anchor.endsWith('Top') ? `
    bottom: 0;
  `: ''}
  ${({ anchor }) => anchor.startsWith('left') ? `
    right: 100%;
  `: ''}
  ${({ anchor }) => anchor.startsWith('right') ? `
    left: 100%;
  `: ''}
  ${({ anchor }) => anchor.endsWith('Left') ? `
    right: 0;
  `: ''}
  ${({ anchor }) => anchor.endsWith('Right') ? `
    left: 0;
  `: ''}
  ${({ anchor }) => anchor === 'bottom' || anchor === 'top' ? `
    left: 50%;
    transform: translate(-50%, 0);
  `: ''}
  ${({ anchor }) => anchor === 'left' || anchor === 'right' ? `
    top: 50%;
    transform: translate(0, -50%);
  `: ''}
`;

const Popover = props => {
  // Popover props
  const {
    defaultPopped,
    menu,
    size,
    anchor,
    onPopped,
    disabled,
    forcePopped,
  } = props;
  // Card props
  const { contentSpace, popupWidth, popupMargin } = props;

  const [popped, setPopped] = useState(defaultPopped || forcePopped);
  const ref = useRef(false);
  useEffect(() => {
    const handleClick = e => {
      // ignore click if disabled
      if (disabled) return;
      // if click inside => pop
      if (!forcePopped) {
        const willPop = ref.current.contains(e.target);
        const change = popped !== willPop;
        setPopped(willPop);
        if (onPopped && change) onPopped(willPop);
      }
    };
    // subscribe to mousedown event
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      // remove subscription
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, [disabled]);

  const childrenProps = {};
  if (size) childrenProps.size = size;
  const boxProps = usePropsFilter(props, Box.propTypes);
  const popupShadow = forcePopped ? 'none' : undefined;

  return (
    <Box position="relative" display="inline-block" ref={ref} {...boxProps}>
      {props.children &&
        Children.map(props.children, (child, i) =>
          cloneElement(child, { key: i, ...childrenProps }),
        )}
      {popped && (
        <PopoverCard
          contentSpace={contentSpace}
          width={popupWidth}
          margin={popupMargin}
          anchor={anchor}
          shadow={popupShadow}
        >
          {menu}
        </PopoverCard>
      )}
    </Box>
  );
};

Popover.propTypes = {
  ...inputSizes.propTypes,
  children: PropTypes.node,
  menu: PropTypes.node,
  contentSpace: Card.propTypes.contentSpace,
  popupWidth: Card.propTypes.width,
  popupMargin: Card.propTypes.margin,
  anchor: PropTypes.oneOf([
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
    'left',
    'leftTop',
    'leftBottom',
    'right',
    'rightTop',
    'rightBottom',
  ]).isRequired,
  defaultPopped: PropTypes.bool,
  onPopped: PropTypes.func,
  disabled: PropTypes.bool,
  forcePopped: PropTypes.bool,
};

Popover.defaultProps = {
  anchor: 'bottom',
  defaultPopped: false,
  contentSpace: 's',
};

export { Popover };

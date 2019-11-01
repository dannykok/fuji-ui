import React from 'react';
import { Box } from '../box';
import { Column, Row } from '../flex';
import { Card } from '../card';
import T from '../typography';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { match } from 'styled-is';
import { themeGet } from '@styled-system/theme-get';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';

const fadeInAnim = keyframes`
  0% {
    margin-bottom: -20px;
    opacity: 0;
  }
  100% {
    margin-bottom: 0;
    opacity: 1;
  }
`;

const iconFor = type => {
  var icon, color;
  switch (type) {
    case 'success':
      icon = faCheckCircle;
      color = '#7cb342';
      break;
    case 'error':
      icon = faExclamation;
      break;
    default:
      icon = false;
  }
  if (icon) return <FontAwesomeIcon icon={icon} color={color} />;
};

const NotificationCard = styled(Card)`
  min-width: 240px;
  z-index: 100;
  animation: ${() =>
    css`
      ${fadeInAnim} 0.1s ease-in
    `};
  span.message {
    display: block;
    font-weight: ${themeGet('fonts.body')};
    &:not(:first-child) {
      margin-top: ${themeGet('space.s', '8px')};
    }
  }
  ${match('type', 'error')`
    background-color: ${themeGet('colors.error', 'red')};
    color: ${themeGet('colors.onError', 'white')};
  `}
  svg {
    margin-right: 6px;
  }
`;

const Notification = props => {
  const { messages } = props;
  return (
    <Column position="absolute" left="m" bottom="m" alignItems="flex-start">
      {messages.map(item => {
        const t = typeof item;
        const m = t === 'string' || t === 'number' ? { message: item } : item;
        const cardProps = {
          type: m.type,
        };
        const { key, type, title, message, actions } = m;

        return (
          <NotificationCard key={key} mt="m" minWidth="240px" {...cardProps}>
            <Row alignItems="flex-start">
              {iconFor(type)}
              <Box>
                {title && <T.H5>{title}</T.H5>}
                {message && <span className="message">{message}</span>}
                {!!actions && <Row mt="m">{actions}</Row>}
              </Box>
            </Row>
          </NotificationCard>
        );
      })}
    </Column>
  );
};

Notification.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.oneOf(['plain', 'success', 'error', 'warning']),
      title: PropTypes.string,
      message: PropTypes.string,
      actions: PropTypes.arrayOf(PropTypes.node),
    }),
  ),
};

export default Notification;

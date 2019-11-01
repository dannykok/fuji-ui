import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Notification from './notification';

export const NotificationContext = createContext(null);

// var cleanTimer;

const DURATION = 3000;

const wrapMessage = message => {
  // wrap plain text message to object and add an unique key
  const key = new Date().getTime();
  const t = typeof message;
  if (t === 'string' || t === 'number') {
    return { key, message };
  }
  return { key, ...message };
};

export const NotificationProvider = props => {
  const { children, messages: newMessages } = props;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // run only if newMessages being modified
    // clone and queue new messages to state
    newMessages &&
      newMessages.map(m => {
        const _m = typeof m === 'object' ? { ...m } : m.slice(0);
        addMessage(_m);
      });
  }, [JSON.stringify(newMessages)]);

  const addMessage = message => {
    const _msg = wrapMessage(message);
    const { key } = _msg;
    setMessages([...messages, _msg]);
    if (!message.static) {
      const cleanTimer = setTimeout(() => {
        popMessage(key);
        clearTimeout(cleanTimer);
      }, DURATION);
    }
  };

  const popMessage = key => {
    if (key) {
      setMessages(messages => messages.filter(m => m.key !== key));
    } else {
      setMessages(([, ...rest]) => rest);
    }
  };

  // define the function to send and cancel notification
  const notify = message => {
    addMessage(message);
  };

  const dismiss = key => {
    popMessage(key);
  };

  return (
    <NotificationContext.Provider
      value={{
        notify,
        dismiss,
      }}
    >
      <Notification messages={messages} />
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node,
  messages: PropTypes.array,
};

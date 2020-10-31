import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const FrAlert = (props) => {
  const { 
    header,
    message,
    variant
  } = props;

  return (
    <Message
      error={variant === 'error'}
      info={variant === 'info'}
      success={variant === 'success'}
      warning={variant === 'warning'}
      visible // without, Form elements hide all variants except info
    >
      {header && ( <Message.Header>{header}</Message.Header> )}
      {message && ( <Message.Content>{message}</Message.Content>)}
    </Message>
  )
}

FrAlert.propTypes = {
  header: PropTypes.string,
  // "my message" or ["my ", <a>linked<a/>, "message"]
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element]))]),
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning'])
}

export default FrAlert;
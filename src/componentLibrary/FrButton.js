import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const FrButton = (props) => {
  const { 
    as,
    color,
    content,
    children,
    disabled,
    inverted,
    variant,

    handleClick
  } = props;

  return (
    <Button 
      as={as}
      basic={variant === 'basic'}
      color={color}
      disabled={disabled}
      inverted={inverted}
      primary={variant === 'primary'}
      secondary={variant === 'secondary'}

      handleClick={handleClick}
    >
      {children || content}
    </Button>
  )
}

FrButton.defaultProps = {
  as: 'button',
  color: undefined,
  content: '',
  disabled: false,
  inverted: false,
  variant: 'primary',
  handleClick: () => {}
}

FrButton.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  variant: PropTypes.string,
  
  handleClick: PropTypes.func
}

export default FrButton;
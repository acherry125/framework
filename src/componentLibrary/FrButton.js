import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const FrButton = (props) => {
  const { 
    as,
    color,
    label,
    disabled,
    inverted,
    size,
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
      size={size}

      onClick={handleClick}
    >
      {label}
    </Button>
  )
}

FrButton.defaultProps = {
  as: 'button',
  label: '',
  disabled: false,
  inverted: false,
  variant: 'primary',
  handleClick: () => {}
}

FrButton.propTypes = {
  as: PropTypes.string,
  color: PropTypes.oneOf(['red', 'orange', 'yellow', 'green', 'blue', 'grey', 'black', 'purple', 'pink', 'brown', 'teal', 'olive', 'violet']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']),
  variant: PropTypes.oneOf(['', 'primary', 'secondary', 'basic']),
  handleClick: PropTypes.func
}

export default FrButton;
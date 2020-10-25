import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const FrForm = (props) => {
  const { 
    children,
    loading,
    size,
    variant
  } = props;

  return (
    <Form 
      loading={loading}
      error={variant === 'error'}
      size={size}
      success={variant === 'success'}
      warning={variant === 'warning'}
    >
      {children}
    </Form>
  )
}

FrForm.defaultProps = {
  loading: false,
  variant: '',
}

FrForm.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']),
  variant: PropTypes.oneOf(['', 'success', 'warning', 'error']),
}

export default FrForm;
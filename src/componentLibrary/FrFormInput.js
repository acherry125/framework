import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const sizeToWidth = (size) => {
  switch(size) {
    case 'small':
      return 4;
    case 'medium': 
      return 8;
    case 'large': 
      return 12;
    case 'full':
    default:
      return 16;
  }
}

export const FrFormInput = (props) => {
  const { 
    children,
    label,
    size,
    
    handleChange,
    handleBlur
  } = props;

  const handleChangeEvent = (e) => {
    const name = _.get(e, 'target.name', '');
    const value = _.get(e, 'target.value', '');

    handleChange(name, value);
  }
  
  const handleBlurEvent = (e) => {
    const name = _.get(e, 'target.name', '');
    const value = _.get(e, 'target.value', '');

    handleBlur(name, value);
  }

  const width = sizeToWidth(size);

  const input = (
    <Input 
      onChange={handleChangeEvent}
      onBlur={handleBlurEvent}
    />
  );

  return (
    <Form.Field width={width} >
      <label>
        {label}
        {input}
      </label>
    </Form.Field>
  )
}

FrFormInput.defaultProps = {
}

FrFormInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

export default FrFormInput;
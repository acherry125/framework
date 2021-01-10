import React, { useState } from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { shouldSaveToRedux, saveToRedux } from '../common/utils';

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
    fluid,
    formId,
    label,
    size,
    inputType,
    reduxJsonPath,
    saveToService,
    handleBlur
  } = props;

  const [value, setValue] = useState(''); // needs to initialize from props

  const handleChangeEvent = (e) => {
    const value = _.get(e, 'target.value', '');
    setValue(value);
  }
  
  const handleBlurEvent = (e) => {
    const name = _.get(e, 'target.name', '');
    const value = _.get(e, 'target.value', '');
    if (shouldSaveToRedux(reduxJsonPath)) {
      saveToRedux(reduxJsonPath, saveToService);
    } else {
      handleBlur(name, value);
    }
  }

  const width = sizeToWidth(size);

  let input;

  switch(inputType) {
    case 'textarea':
      input = (
        <TextArea 
          rows={3}
          onChange={handleChangeEvent}
          onBlur={handleBlurEvent}
          value={value}
        />
      );
      break;
    case 'text':
    default:
      input = (
        <Input 
          id={formId}
          onChange={handleChangeEvent}
          onBlur={handleBlurEvent}
          value={value}
          fluid={fluid}
        />
      )
  }

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
  fluid: false,
  inputType: 'text',
  handleBlur: () => console.error('Unimplemented onblur handler for FrFormInput')
}

FrFormInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'textarea']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  fluid: PropTypes.bool,
  formId: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  reduxJsonPath: PropTypes.string,
  saveToService: PropTypes.string,
  handleBlur: PropTypes.func,
  validationId: PropTypes.string
}

export default FrFormInput;
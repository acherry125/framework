import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { renderChildren } from '../common/utils';

export const FrFormGroup = (props) => {
  const { 
    children,
    grouped,
    inline,
    widths
  } = props;

  return (
    <Form.Group
      grouped={grouped}
      inline={inline}
      widths={widths}
    >
      {renderChildren(children, (i) => ({ key: i }))}
    </Form.Group>
  )
}

FrFormGroup.defaultProps = {
  inline: false,
  grouped: false
}

FrFormGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  grouped: PropTypes.bool,
  inline: PropTypes.bool,
  widths: PropTypes.oneOf(['equal', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
}

export default FrFormGroup;
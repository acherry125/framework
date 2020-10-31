import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { renderChildren } from '../common/utils';

export const FrSegment = (props) => {
  const { 
    children
  } = props;

  return (
    <Segment>
      {renderChildren(children, (i) => ({ key: i }))}
    </Segment>
  )
}

FrSegment.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
}

export default FrSegment;
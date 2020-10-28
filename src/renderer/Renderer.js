import React from 'react';
import componentLibrary from '../componentLibrary';
import PropTypes from 'prop-types';
import _ from 'lodash';

const MISSING_COMPONENT_ERROR = 'MissingComponentDebugError';




export const Renderer = (props) => {
  const {
    component,
    configuration,
    extraProps,
    nestedChildren,
  } = props;

  const NestedChildren = (props) => {
    return _.map(nestedChildren, (child, index) => (
      <Renderer key={_.get(child, 'component') + '-' + index} {...child} extraProps={props}></Renderer>
    ))
  }
  

  const RenderAs = _.get(componentLibrary, component, _.get(componentLibrary, MISSING_COMPONENT_ERROR));
  return (
    <RenderAs 
      {...configuration}
      {...extraProps}
    >
      <NestedChildren />
    </RenderAs>
  );
}

Renderer.propTypes = {
  component: PropTypes.string.isRequired,
  configuration: PropTypes.object,
  extraProps: PropTypes.object
}

export default Renderer;
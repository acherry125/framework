import React from 'react';
import componentLibrary, { FrFormInput, FrForm } from '../componentLibrary';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser'; 
import _ from 'lodash';

const MISSING_COMPONENT_ERROR = 'MissingComponentDebugError';

const FR_MARKER = '$fr';

const typeConvert = (value, dataType) => {
  switch(dataType) {
    case 'string':
      return _.toString(value)
    case 'element':
      return ReactHtmlParser(_.toString(value)); // user 'element' for HTML strings like <a href="#">link</a>
    case 'number': 
      return _.toNumber(value);
    case 'boolean':
      return value === 'false' ? false : !!value // need to revisit this
    default:
      return value;
  }
}

const configureProp = (prop) => {
  if (_.has(prop, FR_MARKER)) {
    let propToPass = _.assign({}, prop);
    let value = _.get(propToPass, [FR_MARKER, 'value']);
    return typeConvert(value, _.get(propToPass, [FR_MARKER, 'propType']));
  } else { 
    return prop;
  }
};

export const Renderer = (props) => {
  const {
    editable,
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

  let configProps = {};

  _.forEach(configuration, (prop, propName) => _.set(configProps, propName, configureProp(prop)));
  
  configProps = { 
    ...configProps,
    ...extraProps
  };

  const unknownProps = _.reduce(configProps, (acc, prop, name) => RenderAs.propTypes && !_.includes(_.keys(RenderAs.propTypes), name) ? [...acc, { name, value: prop }] : acc, []);
  if (!_.isEmpty(unknownProps)) console.log('Component is rendering with extra props not defined in propTypes', component, ':', unknownProps);

  const rendered = (
    <RenderAs 
      {...configProps}
    >
      <NestedChildren />
    </RenderAs>
  );

  return editable ? (
      <React.Fragment>
        <FrForm>
          <FrFormInput 
            label="Edit the configuration"
            inputType="textarea"
          />
        </FrForm>
        {rendered}
      </React.Fragment>
    ) :
    rendered;
}

const baseShape = {
  component: PropTypes.string.isRequired,
  configuration: PropTypes.object,
  extraProps: PropTypes.object,
  nestedChildren: PropTypes.arrayOf(PropTypes.object)
}

Renderer.propTypes = {
  ...baseShape,
  nestedChildren: PropTypes.arrayOf(PropTypes.shape(baseShape))
}

export default Renderer;
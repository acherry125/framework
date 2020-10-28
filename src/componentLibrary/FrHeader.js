import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { renderChildren } from '../common/utils';

export const FrHeader = (props) => {
  const { 
    as,
    text
  } = props;

  return (
    <Header as={as}>
      {text}
    </Header>
  )
}

FrHeader.defaultProps = {
  as: 'h6',
  text: ''
}

FrHeader.propTypes = {
  as: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FrHeader;
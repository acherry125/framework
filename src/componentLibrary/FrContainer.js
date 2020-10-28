import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { renderChildren } from '../common/utils';

export const FrContainer = (props) => {
  const { 
    children
  } = props;

  return (
    <Container>
      {renderChildren(children, (i) => ({ key: i }))}
    </Container>
  )
}

FrContainer.defaultProps = {
}

FrContainer.propTypes = {
}

export default FrContainer;
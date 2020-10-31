import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import contexts from '../common/contexts';
import { renderChildren } from '../common/utils';

export const FrContextConsumer = (props) => {
  const { 
    contextToConsume,
    contextPassToChildAs,
    children
  } = props;


  const contextValue = useContext(contexts[contextToConsume])

  return (
    <>
      {renderChildren(children, (i) => ({ 
        key: i,
        [contextPassToChildAs]: contextValue
      }))}
    </>
  )
}

FrContextConsumer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  contextToConsume: PropTypes.string.isRequired,
  contextPassToChildAs: PropTypes.string.isRequired
}

export default FrContextConsumer;
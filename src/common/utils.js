import React from 'react';

export const renderChildren = (children, getProps) => {
  return React.Children.map(children, (child, index) => React.cloneElement(child, getProps(index)));
}

export const shouldSaveToRedux = (props) => true;
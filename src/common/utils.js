import React from 'react';

export const renderChildren = (children, getProps) => {
  return React.Children.map(children, (child, index) => React.cloneElement(child, getProps(index)));
}

export const shouldSaveToRedux = (props) => true;

export const saveToRedux = (reduxPath, apiType) => { console.log('would be saving to redux with datapath', reduxPath, 'api type', apiType) };
import React from 'react';
import _ from 'lodash';

export const renderChildren = (children, getProps) => {
  return React.Children.map(children, (child, index) => React.cloneElement(child, getProps(index)));
}

export const shouldSaveToRedux = (reduxPath) => !_.isEmpty(reduxPath);

export const saveToRedux = (reduxPath, apiType) => { console.log('would be saving to redux with datapath', reduxPath, 'api type', apiType) };
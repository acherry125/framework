import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { renderChildren } from '../common/utils';

export const FrGridColumn = (props) => {
  const { 
    children,
    width,
  } = props;

  return (
    <Grid.Column
      width={width}
    >
      {renderChildren(children, (i) => ({ key: i }))}
    </Grid.Column>
  )
}

FrGridColumn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  width: PropTypes.number
}

export default FrGridColumn;
import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { renderChildren } from '../common/utils';

export const FrGrid = (props) => {
  const { 
    children,
    padded,
    stackable,
  } = props;

  return (
    <Grid
      padded={padded}
      stackable={stackable}
    >
      {renderChildren(children, (i) => ({ key: i }))}
    </Grid>
  )
}

FrGrid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  padded: PropTypes.bool,
  stackable: PropTypes.bool
}

export default FrGrid;
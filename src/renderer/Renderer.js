import React from 'react';
import componentLibrary from '../componentLibrary';

const MISSING_COMPONENT_ERROR = 'MissingComponentDebugError';

export const Renderer = (props) => {
  const {
    component,
    children,
    configuration
  } = props;

  const RenderAs = componentLibrary[component || MISSING_COMPONENT_ERROR];
  return (
    <RenderAs 
      {...configuration}
    >
      {children}
    </RenderAs>
  );
}

export default Renderer;
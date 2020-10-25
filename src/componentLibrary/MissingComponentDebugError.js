export const MissingComponentDebugError = (props) => {
  console.error('This component is incorrectly configured. It is not rendering on the page. Props:', props);

  return null;
}

export default MissingComponentDebugError;
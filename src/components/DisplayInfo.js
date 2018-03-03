import React from 'react';

const DisplayInfo = ({ display, children }) => {
  if (display) {
    return children
  }
  return null
}

export default DisplayInfo;
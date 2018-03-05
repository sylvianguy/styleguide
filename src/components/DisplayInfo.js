import React from 'react';

//will only render childen component / elements if display prop
//returns a value of true
const DisplayInfo = ({ display, children }) => {
  if (display) {
    return children
  }
  return null
}

export default DisplayInfo;
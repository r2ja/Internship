import React, { Component, useState } from 'react';

const ToggleGroup = ({ children }) => {
    const [activeIndex, setActiveIndex ] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
    }

    const modifiedChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeIndex,
      onToggle: () => handleToggle(index),
    })
  );

  return <div>{modifiedChildren}</div>;
     
}
 
export default ToggleGroup;
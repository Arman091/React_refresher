/**
 * Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.
For instance, if we want to add a file as an input, this cannot be controlled as this depends on the browser so this is an example of an uncontrolled input.
 */

import React from "react";

const UncontrolledComponent = () => {
  const inputRef = React.createRef();

  const handleClick = () => {
    const value = inputRef.current.value;
    console.log("Value:", value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
};

export default UncontrolledComponent;

/**
 * In this example, the UncontrolledComponent uses a ref (inputRef) to access the DOM node of the input field. When the user clicks the "Get Value" button, the handleClick function reads the value directly from the DOM node. In this case, the component is uncontrolled by React, and the state is managed by the DOM.
 */
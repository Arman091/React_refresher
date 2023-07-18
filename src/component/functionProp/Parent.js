/**
 * HERE WE WILL LEARN HOW CHILD COMPONENT COMMUNICATE WITH PARENT FUNCTION USING FUNCTION PASED BY PARENT AS PROPS
 * 
 */

import React, { useState } from "react";
import ChildComponent from "./Child";

function ParentComponent() {
  const [message, setMessage] = useState("");

  // Function to be called by the child to update the message in the parent
  function updateMessage(newMessage) {
    setMessage(newMessage);
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {message}</p>
      <ChildComponent onMessageChange={updateMessage} />
    </div>
  );
}

export default ParentComponent;

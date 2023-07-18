import React, { useState } from "react";

function ChildComponent({ onMessageChange }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function sendMessageToParent() {
    onMessageChange(inputValue); // Call the function passed down from the parent
  }

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={sendMessageToParent}>Send Message to Parent</button>
    </div>
  );
}

export default ChildComponent;

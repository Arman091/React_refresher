/**
 * Data Flow from UI to State (Reverse Binding):
Two-way binding takes it a step further by allowing changes made in the UI to update the component's state. When the user interacts with an input field (e.g., types text), the changes are reflected in the state, keeping the state in sync with the UI.
 */
import React, { useState } from "react";

function Twowaybind() {
  const [name, setName] = useState(""); // State for storing the name

  function handleNameChange(event) {
    // Update the name state when the input field changes
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}
export default Twowaybind;
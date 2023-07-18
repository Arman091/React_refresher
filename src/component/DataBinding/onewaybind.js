/**
 * Data Flow from State to UI (One-Way Binding):
   In React, the data flow from the component's state to the UI is known as one-way binding. When you initialize a 
   component's state or update it using setState, the changes are automatically reflected in the UI elements that 
   are bound to the state.
 * 
 */
 
 import React, { useState } from "react";

 function MyComponent() {
   const [name, setName] = useState(""); // State for storing the name

   function handleNameChange(event) {
     // Update the name state when the input field changes
     setName(event.target.value);
   }

   return (
     <div>
       <input type="text" onChange={handleNameChange} />
       <p>Hello, {name}!</p>
     </div>
   );
 }

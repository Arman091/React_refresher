/* Controlled Components
 * In a controlled component, the component's state is controlled by React, and its current state is managed and updated by React itself.
 */

import React, { useState } from "react";

const ControlledComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
};

export default ControlledComponent;

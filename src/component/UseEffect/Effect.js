import React, { useState, useEffect } from "react";

function EventExampleWithEffect() {
  const [clickCount, setClickCount] = useState(0);

  // Event handler function to handle the click event
  const handleClick = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  // Use useEffect for event subscription and cleanup
  useEffect(() => {
    // Subscribe to the click event on component mount
    document.addEventListener("click", handleClick);

    // Unsubscribe from the click event on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <p>Click Count: {clickCount}</p>
    </div>
  );
}

export default EventExampleWithEffect;

import React, { useState, useEffect } from "react";

function TimerExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the state every second
      setCount((prevCount) => prevCount + 1);
    }, 1000); // 1000 milliseconds = 1 second

    // Clean-up function to clear the timer on component unmount
      
      
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default TimerExample;

/**
 * Inside the useEffect hook, we use setInterval to create a timer that increments the count state every second (1000 milliseconds). The setInterval function returns an identifier (intervalId) that we store in a variable.

The clean-up function returned from useEffect clears the timer using clearInterval(intervalId) when the component is unmounted. This ensures that the timer is properly cleared, preventing memory leaks and unnecessary updates after the component is no longer in use.
 */
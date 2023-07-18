/* Objectives and Outcomes
 * 1: we will learn functional form of state updating function
 * 2: why we use functional form
 * 3: state depending upon previous state snap
 * 4: BATCH_STATE_UPDATE VS CURRENT_STATE_UPDATE 
 */

import React, { useState } from "react";

function MyComponent() {
  const [state, setState] = useState({
    count: 0,
  });

  function manageCount(value) {
  /*  BATCH UPDATE
    
    setState({
      ...state,
      count: state.count + value,
    });

    setState({
      ...state,
      count: state.count + value,
    });
*/
    
    /* in the above code snippet we are using setState twice so second time value should update based upon our
       latest
        state  which is updated But we are not getting our count incremented by two or decremented by 2,this is not 
        working .

      REASON FOR BATCH UPDATE
       setState function does not immediately update the state. Instead, it schedules the state updates and batches 
       them together to improve performance.
  */
    
    // THIS WILL WORK WELL AS STATE UPDATING FUNCTION USES PREVIOUS STATE SNAPSHOT
    
    // CURRENT STATE UPDATE
    setState((currentCount) => {
        return { count: currentCount.count + value };
    })
     
    setState((currentCount) => {
        return { count: currentCount.count + value };
    });

  }

  return (
    <div>
      <p> {state.count}</p>
      <button
        onClick={() => {
          manageCount(1);
        }}
      >
        Increase +1
      </button>
      <button
        onClick={() => {
          manageCount(-1);
        }}
      >
        decrease by -1
      </button>
    </div>
  );
}

export default MyComponent;

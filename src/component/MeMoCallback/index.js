/**
 * THE ENTIRE COMPONENT IN WHICH STATE CHANGES IS RE-EVALUTED COMPLETELY ON EACH STATE CHANGE
 * 1:THIS MAY CAUSE PERFORMENCE ISSUE IF WE ARE RELOCATIONG OUR VARIABLES AND FUNCTIONS EACH RE-EVALUATION
 */

import React from "react";
import classes from "./memo.module.css";
import Button from "./Button";
import { useState, useCallback } from "react";
import DemoOutput from "./Demo";
function MemoApp() {
  const [showpara, setShowpara] = useState(false);
  console.log("APP Memo RUNNING !!");
 let clickHandle = useCallback(()=> {
    setShowpara((prevState) => {
      return !prevState;
    });
  },[]);

  return (
    <div className={classes.app}>
      <h1>Hi there!</h1>
      {/* if somehow we pass a prop value to child that not change on each re-render of parent in that case 
      we can stop re-evaluation of child component by wrapping it into (React.memo) example
      <DemoOutput show={false} /> */}
      <DemoOutput show={showpara} />
      <Button onClick={clickHandle}>Toggle Para</Button>
    </div>
  );
}

export default MemoApp;

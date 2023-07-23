/**
 * THE ENTIRE COMPONENT IN WHICH STATE CHANGES IS RE-EVALUTED COMPLETELY ON EACH STATE CHANGE
 * 1:THIS MAY CAUSE PERFORMENCE ISSUE IF WE ARE RELOCATIONG OUR VARIABLES AND FUNCTIONS EACH RE-EVALUATION
 */

import React from "react";
import classes from "./memo.module.css";
import Button from "./Button";
import { useState } from "react";
import DemoOutput from "./Demo";
function MemoApp() {
    const [showpara, setShowpara] = useState(false);
    console.log("APP Memo RUNNING !!");
  function handleClick() {
    setShowpara((prevState) => {
      return !prevState;
    });
  }
  return (
    <div className={classes.app}>
      <h1>Hi there!</h1>
          <DemoOutput show={showpara} />
      <Button onClick={handleClick}>Toggle Para</Button>
    </div>
  );
}

export default MemoApp;

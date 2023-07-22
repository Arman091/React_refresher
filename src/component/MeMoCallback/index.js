/**
 * THE ENTIRE COMPONENT IN WHICH STATE CHANGES IS RE-EVALUTED COMPLETELY ON EACH STATE CHANGE
 * 1:THIS MAY CAUSE PERFORMENCE ISSUE IF WE ARE RELOCATIONG OUR VARIABLES AND FUNCTIONS EACH RE-EVALUATION
 */

import React from "react";

import "./App.css";

function MemoApp() {
  return (
    <div className="app">
      <h1>Hi there!</h1>
    </div>
  );
}

export default MemoApp;
import React from "react";

function DemoOutput(props) {
    console.log("DEMO IS RUNNING")
  return <p> {props.show ? "This is New !!" : " "}</p>;
}
// export default React.memo(DemoOutput)
export default DemoOutput;
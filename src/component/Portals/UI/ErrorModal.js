// ErrorModal.js
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  // Create a new div element to use as the portal target
  const portalRoot = document.getElementById("overlays");
  const modalElement = (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );

  // Use ReactDOM.createPortal to render the modal component into the portalRoot
  return ReactDOM.createPortal(modalElement, portalRoot);
};

export default ErrorModal;

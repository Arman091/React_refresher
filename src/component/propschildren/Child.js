function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      {props.children}
    </div>
  );
}

export default ChildComponent;
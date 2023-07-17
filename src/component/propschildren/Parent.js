
import ChildComponent from "./Child";
import ListItem from "./ListItem";
function ParentComponent() {
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent>
        {data.map((item) => (
          <ListItem key={item.id} name={item.name} />
        ))}
      </ChildComponent>
    </div>
  )
}

export default ParentComponent;
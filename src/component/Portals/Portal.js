/*By default, when you render the Modal component, it will be placed inside the div with the id="root", which is the root element of your React app.

However, let's say you want the Modal component to appear as a sibling to the div with the id="root", for example, as a direct child of the body element. To achieve this, you can use React Portals.

*/

/* STEPS 
* 1: update Html file in Public folder
* 2: tell portal portal component tha it is going to be portald somewhere
*/

import React, { useState } from "react";

import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function Portalapp() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default Portalapp;

/**  OBjective:- Objective of this file are as follows
 * 1: handle USerInput
 * 2: handle Diffrent diffrent states
 * 3: update a BiGGerSate Object using individual states eg: merge title,date,price in single state
 * 4: updating state that depends upon previous state [newItem,...previous state snapshot]
 * 5: Rendering Dynamically  list Items by Using {Key} props
 * 
*/


import React, { useState } from "react";

function MyForm() {
  const [title, setTitle] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [price, setPrice] = useState("");
  const [bookArray, settodoArray] = useState([]);
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleIssuedDateChange(event) {
    setIssuedDate(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Perform any desired actions with the form data
    let newbook = {
      title,
      issuedDate,
      price,
    };
    settodoArray([newbook, ...bookArray]);
    // Reset the form after submission
    setTitle("");
    setIssuedDate("");
    setPrice("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="issuedDate">Issued Date:</label>
          <input
            type="Date"
            id="issuedDate"
            value={issuedDate}
            onChange={handleIssuedDateChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>BOOK lIst</h2>
        <ul>
          {bookArray.map((todo, index) => (
            <li key={index}>
              <span style={{ margin: "auto 14px 14px " }}>{todo.title}</span>
              <span style={{ margin: "auto 14px 14px " }}>{todo.issuedDate}</span>
              <span style={{ margin: "auto 14px 14px " }}>{`$ ${todo.price}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyForm;

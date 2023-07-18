/*  OBJECTIVES AND OUTCOMES OF FILE :-
 *
 *  using single state object Instead of difrnt-difrnt use states like in js file ./stateUsing event
 *
 */

import React, { useState } from "react";

function MyForm() {
  const [Book, setBook] = useState({
    bookName: "",
    issuedDate: "",
    price: "",
  });
  const [bookArray,setbookArray]=useState([])  
  function handleTitleChange(event) {
    setBook({
      bookName: event.target.value,
      ...Book,
    });
  }
  function handleIssuedDateChange(event) {
    setBook({
      issuedDate: event.target.value,
      ...Book,
    });
  }

  function handlePriceChange(event) {
    setBook({
      price: event.target.value,
      ...Book,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Perform any desired actions with the form data
    setbookArray([Book,...bookArray])
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
              <span style={{ margin: "auto 14px 14px " }}>
                {todo.issuedDate}
              </span>
              <span
                style={{ margin: "auto 14px 14px " }}
              >{`$ ${todo.price}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyForm;

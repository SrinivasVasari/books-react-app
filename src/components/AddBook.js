import React, { useState, useContext } from "react";
import BooksContext from "../context/context";

const AddBook = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(BooksContext);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDesc, setBookDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const addBook = {
      bookName,
      bookAuthor,
      bookDesc,
    };
    if (
      bookName.trim() === "" ||
      bookAuthor.trim() === "" ||
      bookDesc.trim() === ""
    ) {
      alert("Please enter the book details");
    } else {
      dispatch({ type: "ADD_BOOK", payload: addBook });
      setBookName("");
      setBookAuthor("");
      setBookDesc("");
    }
  };

  return (
    <form className="form col s12" onSubmit={handleSubmit}>
      <div className="row customRow">
        <div className="input-field col s12 m6">
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setBookName(e.target.value)}
            value={bookName}
            className="name"
          />
          <label htmlFor="name">Book Name</label>
        </div>
        <div className="input-field col s12 m6">
          <input
            type="text"
            name="author"
            id="author"
            onChange={(e) => setBookAuthor(e.target.value)}
            value={bookAuthor}
            className="Author"
          />
          <label htmlFor="author">Book Author</label>
        </div>
      </div>

      <div className="row customRow">
        <div className="input-field col s12 m12">
          <input
            type="text"
            name="description"
            id="description"
            onChange={(e) => setBookDesc(e.target.value)}
            value={bookDesc}
            className="description"
          />
          <label htmlFor="description">Book Description</label>
        </div>
      </div>
      <button type="submit" className="waves-effect waves-light btn-small">
        Add Book
      </button>
    </form>
  );
};
export default AddBook;

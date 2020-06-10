import React, { useState, useContext } from "react";
import BooksContext from "../context/context";

const EditBook = () => {
  const { state, dispatch } = useContext(BooksContext);
  const [bookName, setBookName] = useState(
    state && state.currentBook.books.bookName
  );
  const [bookAuthor, setBookAuthor] = useState(
    state && state.currentBook.books.bookAuthor
  );
  const [bookDesc, setBookDesc] = useState(
    state && state.currentBook.books.bookDesc
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateBook = {
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
      dispatch({ type: "UPDATE_BOOK", payload: updateBook });
      setBookName("");
      setBookAuthor("");
      setBookDesc("");
    }
  };

  return (
    <div className="container main-content">
      <div className="editBookForm">
        <h4 className="center-align">Update Book</h4>
        <form className="form col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Book Name"
                onChange={(e) => setBookName(e.target.value)}
                value={bookName || ""}
                className="name"
              />
            </div>
            <div className="input-field col s12">
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Book Author"
                onChange={(e) => setBookAuthor(e.target.value)}
                value={bookAuthor || ""}
                className="Author"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                onChange={(e) => setBookDesc(e.target.value)}
                value={bookDesc || ""}
                name="description"
                id="description"
                placeholder="Book Description"
                className="description"
              />
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn-small">
            update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;

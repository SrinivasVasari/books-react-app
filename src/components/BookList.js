/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useBooksContext } from "../context/context";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { state, dispatch } = useBooksContext();
  const [selected, setSelected] = useState(null);
  const selectedBook =
    state &&
    state.books.filter((book) => {
      if (book.id === selected) {
        return book;
      }
    });
  if (state && !(state.books.length > 0)) {
    return <p>No Book to show please add book...</p>;
  }
  return (
    <>
      {state && state.books.length > 0 ? (
        <ul className={`bookList ${selected === null ? "" : "d-none"}`}>
          {state &&
            state.books.map((book) => {
              const { bookName, bookAuthor } = book.books;
              return (
                <div
                  key={book.id}
                  className={`book-card-panel clear 
              ${book.id === selected ? "flip" : ""}
            `}
                >
                  <div className={`book-card`}>
                    <li id="front" className="front">
                      <div className="header">
                        <h5>{bookName}</h5>
                        <span className="author">
                          <i>__{bookAuthor}</i>
                        </span>
                      </div>
                      <div className="btn-container">
                        <div className="btn-grp">
                          <span
                            id="edit"
                            onClick={() =>
                              dispatch({
                                type: "SET_CURRENT_BOOK",
                                payload: book,
                              })
                            }
                            className="edit-btn btn-floating btn-small waves-effect waves-light blue"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            id="delete"
                            onClick={() =>
                              dispatch({
                                type: "DELETE_BOOK",
                                payload: book.id,
                              })
                            }
                            className="delete-btn btn-floating btn-small waves-effect waves-light orange"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </div>
                        <span
                          id="details"
                          onClick={(e) => setSelected(book.id)}
                          className="details-btn"
                        >
                          <span className="content">details</span>
                          <i className="material-icons">reply</i>
                        </span>
                      </div>
                    </li>
                    <div className="back">
                      <BookDetails
                        book={state && selectedBook[0]}
                        bookId={selected}
                        clickFn={(e) => setSelected(null)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      ) : (
        <p>please add book to show ...</p>
      )}
    </>
  );
};

export default BookList;

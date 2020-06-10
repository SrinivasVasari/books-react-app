import React, { useContext, useReducer } from "react";

import Nav from "./components/Layout/Nav";
import BooksContext from "./context/context";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import EditBook from "./components/EditBook";
import booksReducer from "./reducer/reducer";

const App = () => {
  const initialState = useContext(BooksContext);
  const [state, dispatch] = useReducer(booksReducer, initialState);

  return (
    <>
      <Nav />
      <BooksContext.Provider value={{ state, dispatch }}>
        {state.currentBook === null ? (
          <div className="container main-content">
            <AddBook />
            <BookList />
          </div>
        ) : (
          <EditBook />
        )}
      </BooksContext.Provider>
    </>
  );
};
export default App;

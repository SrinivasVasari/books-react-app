import uuid from "uuid";
const booksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      const newBook = {
        id: uuid.v4(),
        books: action.payload,
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case "SET_CURRENT_BOOK":
      return {
        ...state,
        currentBook: action.payload,
      };
    case "UPDATE_BOOK":
      const updateBook = {
        ...state.currentBook,
        books: action.payload,
      };
      const updateBookIndex = state.books.findIndex(
        (book) => book.id === state.currentBook.id
      );
      const updatedBooks = [
        ...state.books.slice(0, updateBookIndex),
        updateBook,
        ...state.books.slice(updateBookIndex + 1),
      ];
      return {
        currentBook: null,
        books: updatedBooks,
      };
    default:
      return state;
  }
}

export default booksReducer;
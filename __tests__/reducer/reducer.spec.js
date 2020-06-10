import booksReducer from "../../src/reducer/reducer";

describe("Test the Books Reducer", () => {
  it("Should return default state", () => {
    const newState = booksReducer(undefined, {});
    expect(newState).not.toBeNull();
  });
  it("Should returns the new state when adding book details", () => {
    const state = {
      currentBook: null,
      books: [],
    };
    const reducer = booksReducer(state, {
      type: "ADD_BOOK",
      payload: {
        bookAuthor: "test1",
        bookDesc: "test2",
        bookName: "test3",
      },
    });

    expect(reducer).not.toBeNull();
  });
  it("Should returns the state when delete the book", () => {
    const state = {
      currentBook: null,
      books: [
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
          id: "1",
        },
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
          id: "2",
        },
      ],
    };
    const reducer = booksReducer(state, {
      type: "DELETE_BOOK",
      payload: "2",
    });

    expect(reducer).toEqual({
      books: [
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
          id: "1",
        },
      ],
      currentBook: null,
    });
  });

  it("Should returns the state of current Book", () => {
    const state = {
      currentBook: null,
      books: [],
    };
    const reducer = booksReducer(state, {
      type: "SET_CURRENT_BOOK",
      payload: {
        id: "1",
        books: { bookAuthor: "test1", bookDesc: "test2", bookName: "test3" },
      },
    });

    expect(reducer).toEqual({
      books: [],
      currentBook: {
        books: {
          bookAuthor: "test1",
          bookDesc: "test2",
          bookName: "test3",
        },
        id: "1",
      },
    });
  });

  it("Should update the state when editing Book details", () => {
    const state = {
      currentBook: {
        books: {
          bookAuthor: "test1",
          bookDesc: "test2",
          bookName: "test3",
        },
        id: "1",
      },
      books: [
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
          id: "1",
        },
      ],
    };
    const reducer = booksReducer(state, {
      type: "UPDATE_BOOK",
      payload: {
        bookAuthor: "test1",
        bookDesc: "test2",
        bookName: "test3",
      },
    });

    expect(reducer).toEqual({
      books: [
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
          id: "1",
        },
      ],
      currentBook: null,
    });
  });
});

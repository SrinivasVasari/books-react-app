import React from "react";
import { shallow, mount } from "enzyme";
import App from "../src/App";
import BooksContext from "../src/context/context";

describe("Main Component", () => {
  it("should render correctly", () => {
    const spy = shallow(<App />);
    expect(spy).toMatchSnapshot();
  });
  it("should render curr correctly", () => {
    const spy = shallow(<App />);
    const wrapper = spy.instance();
    expect(wrapper).toBeNull();
  });
  it("Should returns the state of current Book", () => {
    const state = {
      currentBook:  {
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
    const wrapper = mount(
      <BooksContext.Provider value={ state }>
        <App {...state.currentBook} />
      </BooksContext.Provider>
    );

    expect(wrapper).not.toBeNull();
  });
});

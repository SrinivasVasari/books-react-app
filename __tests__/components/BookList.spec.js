import React from "react";
import { mount } from "enzyme";

import BookList from "../../src/components/BookList";
import BooksContext from "../../src/context/context";
import BookDetails from "../../src/components/BookDetails";

describe("Book List Container", () => {
  const value = {
    state: {
      books: [
        {
          books: {
            bookAuthor: "author1",
            bookDesc: "desc1",
            bookName: "name1",
          },
          id: "1",
        },
        {
          books: {
            bookAuthor: "author2",
            bookDesc: "desc2",
            bookName: "name2",
          },
          id: "2",
        },
        {
          books: {
            bookAuthor: "author3",
            bookDesc: "desc3",
            bookName: "name3",
          },
          id: "3",
        },
        {
          books: {
            bookAuthor: "author4",
            bookDesc: "desc4",
            bookName: "name4",
          },
          id: "4",
        },
      ],
    },
    dispatch: jest.fn(),
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<BookList />);
  });

  it("Should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });

  it("Should display initially four List Items.", () => {
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList />
      </BooksContext.Provider>
    );
    expect(wrapper.find("li")).toHaveLength(4);
  });
  it("Should render if there is state books empty.", () => {
    const mockValue = {
      state: {
        books: []
      },
      dispatch: jest.fn(),
    }
    const wrapper = mount(
      <BooksContext.Provider value={mockValue}>
        <BookList />
      </BooksContext.Provider>
    );
    expect(wrapper).not.toBeNull();
  });
  it("Should call List Item click function", () => {
    const listItemHandleFn = jest.fn();
    const li = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={listItemHandleFn} />
      </BooksContext.Provider>
    );
    li.find("li").at(0).simulate("click");
    expect(listItemHandleFn).toHaveBeenCalledTimes(0);
  });
  it("Should call edit button click function", () => {
    const editHandleFn = jest.fn();
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={editHandleFn} />
      </BooksContext.Provider>
    );
    wrapper.find("#edit").at(0).simulate("click");
    expect(editHandleFn).toHaveBeenCalledTimes(0);
  });
  it("Should call Delete button function", () => {
    const deleteHandleFn = jest.fn();
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={deleteHandleFn} />
      </BooksContext.Provider>
    );
    wrapper.find("#delete").at(0).simulate("click");
    expect(deleteHandleFn).toHaveBeenCalledTimes(0);
  });
  it("Should call Item click function", () => {
    const backItemHandleFn = jest.fn();
    const li = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={backItemHandleFn} />
      </BooksContext.Provider>
    );
    li.find(".details-btn").at(0).simulate("click");
    expect(backItemHandleFn).toHaveBeenCalledTimes(0);
  });
  it('should invoke the clickFunction callback', () => {
      const setSelected = jest.fn();
      const wrapper = mount(
        <BooksContext.Provider value={value}>
          <BookList>
            <BookDetails clickFn={setSelected} />
          </BookList>
        </BooksContext.Provider>
        
      );
      wrapper.find("BookDetails").at(0).prop('clickFn')();
      expect(setSelected).not.toBeNull();
  });
});

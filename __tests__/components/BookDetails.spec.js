import React from "react";
import { mount } from "enzyme";
import BookDetails from "../../src/components/BookDetails";

describe("Book Details", () => {
  const clickFn = jest.fn();
  const props = {
    book: {
      books: {
        bookName: "test1 Name",
        bookAuthor: "test1 Author",
        bookDesc: "test1 Description",
      },
      id: "1"
    },
    clickFn,
  };
  it("Should render BookDetails with data", () => {
    const wrapper = mount(<BookDetails {...props} />);
    expect(wrapper).not.toBeNull();
  });
});

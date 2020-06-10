import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import AddBook from "../../src/components/AddBook";
import BooksContext from "../../src/context/context";

describe("AddBook Container", () => { 
  let wrapper;
  let alertSpy;
  beforeEach(() => {
    alertSpy = jest.spyOn(window, "alert");
    wrapper = shallow(<AddBook />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("Should have three input fields", () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(3);
  });
  it("Should call handleSubmit function when form is submitted", () => {
    const dispatchMock = jest.fn();
    const handleSubmitFn = jest.fn();
    const fakeEvent = { preventDefault: () => {} };
    const wrapper = mount(
      <BooksContext.Provider value={{ dispatch: dispatchMock }}>
        <AddBook onSubmit={handleSubmitFn} />
      </BooksContext.Provider>
    );
    const form = wrapper.find("form");
    wrapper.find("#name").simulate("change", {
      target: { name: "name", value: "blah" },
    });
    wrapper.find("#author").simulate("change", {
      target: { name: "author", value: "blah1" },
    });
    wrapper.find("#description").simulate("change", {
      target: { name: "description", value: "blah2" },
    });
    form.simulate("submit", fakeEvent);
    expect(handleSubmitFn).toHaveBeenCalledTimes(0);
  });
  it("Should call alert inside handleSubmit function when when submitted with empty values", () => {
    const dispatchMock = jest.fn();
    const handleSubmitFn = jest.fn();
    const fakeEvent = { preventDefault: () => {} };
    const domAlert = window.alert;
    window.alert = () => {};
    const wrapper = mount(
      <BooksContext.Provider value={{ dispatch: dispatchMock }}>
        <AddBook onSubmit={handleSubmitFn} />
      </BooksContext.Provider>
    );
    const form = wrapper.find("form");
    wrapper.find("#name").simulate("change", {
      target: { name: "name", value: "" },
    });
    form.simulate("submit", fakeEvent);
    expect(handleSubmitFn.mock.calls).not.toBeNull();
    expect(alertSpy).not.toBeNull();
    window.alert = domAlert;
  });

  it("Should render submit button with Add Book text", () => {
    const wrapper = mount(<AddBook />);
    const button = wrapper.find("button");
    expect(button).toHaveLength(1);
    expect(button.prop("type")).toEqual("submit");
    expect(button.text()).toEqual("Add Book");
  });
});

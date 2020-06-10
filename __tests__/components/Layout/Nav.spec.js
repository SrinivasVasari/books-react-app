import React from "react";
import * as renderer from 'react-test-renderer';
import Nav from "../../../src/components/Layout/Nav";

describe("Navigation", () => {
  it('should render without errors', () => {
    const component = renderer.create(<Nav />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

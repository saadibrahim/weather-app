import React from "react";
import renderer from "react-test-renderer";

import Error from "./index";

test("renders the Error using Snapshots", () => {
  const component = renderer.create(<Error message="test" />);
  expect(component).toMatchSnapshot();
});

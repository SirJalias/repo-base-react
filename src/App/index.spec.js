import React from "react";
import renderer from "react-test-renderer";

import App from "./index";
import Root from "../entry/Root";

let WrapperApp;

beforeEach(() => {
  WrapperApp = () => (
    <Root initialStore={{}}>
      <App />
    </Root>
  );
});

test("Button renders correctly", () => {
  expect(renderer.create(<WrapperApp />).toJSON()).toMatchSnapshot();
});

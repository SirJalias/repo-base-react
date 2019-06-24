import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";

import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/core";

import Root from "./Root";
import App from "../App";

const RootAppWithNoStyles = () => (
  <React.Fragment>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    <Root>
      <App />
    </Root>
  </React.Fragment>
);

RootAppWithNoStyles.displayName = "RootAppWithNoStyles";

const HotResetStyles = hot(RootAppWithNoStyles);

export default ReactDOM.render(
  <HotResetStyles />,
  document.getElementById("root")
);

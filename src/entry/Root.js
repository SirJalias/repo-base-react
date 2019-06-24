import PropTypes from "prop-types";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createMemoryHistory, createBrowserHistory } from "history";
import configStore from "./store";

const testMode = process.env.NODE_ENV === "test";

const history = testMode ? createMemoryHistory() : createBrowserHistory();

const Root = ({ children, initialStore }) => (
  <ReduxProvider store={configStore(history, initialStore)}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </ReduxProvider>
);

Root.displayName = "Root";
Root.defaultProps = {
  initialStore: {}
};
Root.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialStore: PropTypes.object
};

export default Root;

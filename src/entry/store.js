import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../modules";

const devMode = process.env.NODE_ENV === "development";

const getMiddlewares = history => {
  const common = [routerMiddleware(history)];
  const dev = [loggerMiddleware];
  const prod = [];
  return [...(devMode ? dev : prod), ...common];
};

export default function configureStore(history, preloadedState = {}) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(...getMiddlewares(history)))
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../modules", () =>
      store.replaceReducer(rootReducer(history))
    );
  }

  return store;
}

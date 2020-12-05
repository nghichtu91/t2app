// #region Interface Imports
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
// #endregion Interface Imports

// #region Local imports
import RootReducer from "@Redux/Reducers";
// #endregion Local imports

declare const window: any;

export const configureStore = (preloadedState: object) => {
  const middlewares: Array<any> = [];
  if (process.env.NODE_ENV === "development") {
    middlewares.push(createLogger({}));
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composed = [applyMiddleware(...middlewares)];

  const store = createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(...composed),
  );
  // persistStore(store);

  return store;
};

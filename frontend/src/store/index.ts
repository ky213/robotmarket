import { createStore, applyMiddleware, compose, Middleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "store/reducers/root.reducer";
import { RootState } from "./models/redux.model";

const defaultMiddlewares = [thunkMiddleware, promiseMiddleware];
const composedMiddlewares = (middlewares: Middleware[]) =>
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...defaultMiddlewares, ...middlewares))
    : compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initStore = (initialState?: RootState, middlewares = []) =>
  createStore(rootReducer, initialState, composedMiddlewares(middlewares));

export default initStore;

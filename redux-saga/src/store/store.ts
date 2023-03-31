import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers/index";
const sagarMiddleware = createSagaMiddleware();
const middlewares = [sagarMiddleware];

const composer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

export default store;

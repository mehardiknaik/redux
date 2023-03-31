import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers/reducer";
import rootSaga from "./sagas/saga";
import { composeWithDevTools } from "@redux-devtools/extension";

const sagarMiddleware = createSagaMiddleware();
const middlewares = [sagarMiddleware];

const composer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composer);

sagarMiddleware.run(rootSaga);

export default store;

import { all } from "redux-saga/effects";
import userSagaWatcher from "./user";

function* rootSaga() {
  yield all([userSagaWatcher()]);
}

export default rootSaga;

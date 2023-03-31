import { all, call, put, takeLatest } from "redux-saga/effects";
import { userFailure, userSuccess } from "../action/user";
import { FETCH_USER_REQUEST } from "../actionTypes";
function* fetchUserSaga(): any {
  try {
    const response = yield call(
      fetch,
      "https://random-data-api.com/api/v2/users?size=2"
    );
    const responseBody = yield response.json();
    yield put(
      userSuccess({
        data: responseBody,
      })
    );
  } catch (e: any) {
    yield put(
      userFailure({
        error: e.message,
      })
    );
  }
}

function* userSagaWatcher() {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSagaWatcher;

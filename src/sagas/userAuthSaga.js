import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_INFO } from '../store/actions';
import { getUserInfo } from '../api/getUserInfo';

export function * fetchData(action) {
  const { user, password, rememberMe } = action;
  const data = yield call(getUserInfo, user, password, rememberMe);

  yield put(receivedUserInfo(data));
}

export function * userAuthSaga() {
  yield takeEvery(GET_USER_INFO, fetchData);
}

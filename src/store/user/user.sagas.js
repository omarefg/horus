import { call, put, takeEvery } from 'redux-saga/effects';
import * as userService from '../../api/user.api';
import { USER_SET_USERS, USER_GET_USERS } from './user.types';

function* getAllUsers() {
  try {
    const users = yield call(userService.getUsers);
    yield put({ type: USER_SET_USERS, payload: { users } });
  } catch (error) {
    yield put({ type: USER_SET_USERS, payload: { message: error.message } });
  }
}

function* userSaga() {
  yield takeEvery(USER_GET_USERS, getAllUsers);
}

export default userSaga;

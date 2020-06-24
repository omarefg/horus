import {
  USER_SET_USERS,
  USER_SET_USER_DETAILS,
  USER_GET_USERS,
} from './user.types';

export const setUsers = payload => ({
  type: USER_SET_USERS,
  payload,
});

export const setUserDetails = payload => ({
  type: USER_SET_USER_DETAILS,
  payload,
});

export const getAllUsers = payload => ({
  type: USER_GET_USERS,
  payload,
});

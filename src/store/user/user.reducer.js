import { USER_SET_USERS, USER_SET_USER_DETAILS } from './user.types';

const initialState = {
  users: [],
  userDetails: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_USERS: {
      return {
        ...state,
        users: action.payload.users,
      };
    }
    case USER_SET_USER_DETAILS: {
      return {
        ...state,
        userDetails: action.payload.userDetails,
      };
    }
    default:
      return state;
  }
};

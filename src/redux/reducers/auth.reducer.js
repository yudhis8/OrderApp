import {types} from '../../constants/auth.constant';

const initialState = {
  user: {},
  fetching: false,
  error: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_AUTH_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        user: action.data,
        fetching: false,
        error: null,
      };
    case types.LOGIN_AUTH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message,
      };
    case types.LOGOUT_AUTH_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.LOGOUT_AUTH_SUCCESS:
      return {
        ...state,
        user: {},
        fetching: false,
        error: null,
      };
    case types.LOGOUT_AUTH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default auth;

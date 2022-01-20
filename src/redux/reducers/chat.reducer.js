import {types} from '../../constants/chat.constant';

const initialState = {
  chats: [],
  detailChats: [],
  fetching: false,
  error: null,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST_CHAT_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.GET_LIST_CHAT_SUCCESS:
      return {
        ...state,
        chats: action.data,
        fetching: false,
        error: null,
      };
    case types.GET_LIST_CHAT_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message,
      };
    case types.GET_DETAIL_LIST_CHAT_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.GET_DETAIL_LIST_CHAT_SUCCESS:
      return {
        ...state,
        detailChats: action.data,
        fetching: false,
        error: null,
      };
    case types.GET_DETAIL_LIST_CHAT_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message,
      };

    case types.CREATE_LIST_CHAT_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.CREATE_LIST_CHAT_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };
    case types.CREATE_LIST_CHAT_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message,
      };

    case types.CREATE_LIST_CHAT_SELLER_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.CREATE_LIST_CHAT_SELLER_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };
    case types.CREATE_LIST_CHAT_SELLER_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message,
      };

    default:
      return state;
  }
};

export default cart;

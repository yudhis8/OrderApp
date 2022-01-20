import {types} from '../../constants/order.constant';

const initialState = {
  orders: [],
  fetching: false,
  error: null,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDER_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.data,
        fetching: false,
        error: null,
      };
    case types.GET_ORDER_FAILED:
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

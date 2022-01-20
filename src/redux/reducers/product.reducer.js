import {types} from '../../constants/product.constant';

const initialState = {
  products: [],
  fetching: false,
  error: null,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
        fetching: false,
        error: null,
      };
    case types.GET_PRODUCTS_FAILED:
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

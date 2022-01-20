import {types} from '../../constants/cart.constant';

const initialState = {
  carts: [],
  fetching: false,
  error: null,
};

function addItem(items, payload) {
  console.log(items, payload);
  const isExist = items.find(item => item.id === payload.id);

  let result = items;

  if (isExist) {
    result = items.map(item => {
      if (item.id === payload.id) {
        if (item.qty) {
          item.qty++;
          item.total = item.price + item.total;
        } else {
          item.qty = 1;
        }
      }
      return item;
    });
  } else {
    const newItem = {
      ...payload,
      qty: 1,
      total: payload.price,
    };
    result = Array.prototype.concat(result, newItem);
  }

  return result;
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CART_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.SET_CART_SUCCESS:
      return {
        ...state,
        carts: addItem(state.carts, action.data),
        fetching: false,
        error: null,
      };
    case types.SET_CART_FAILED:
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

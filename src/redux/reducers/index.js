import {combineReducers} from 'redux';

import auth from './auth.reducer';
import product from './product.reducer';
import cart from './cart.reducer';
import order from './order.reducer';

export default combineReducers({
  auth,
  product,
  cart,
  order,
});

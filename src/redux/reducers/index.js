import {combineReducers} from 'redux';

import auth from './auth.reducer';
import product from './product.reducer';
import cart from './cart.reducer';

export default combineReducers({
  auth,
  product,
  cart,
});

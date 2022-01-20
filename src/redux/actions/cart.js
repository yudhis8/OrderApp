import {auth, db, getDatabase} from 'helpers/Firebase';
import {types} from '../../constants/cart.constant';

export function setCartAction(data) {
  return async dispatch => {
    try {
      dispatch({type: types.SET_CART_REQUEST});
      dispatch({type: types.SET_CART_SUCCESS, data});
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.SET_CART_FAILED, message: error});
    }
  };
}

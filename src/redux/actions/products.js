import {auth, db, getDatabase} from 'helpers/Firebase';
import {types} from '../../constants/product.constant';

export function getProductAction(data) {
  return async dispatch => {
    try {
      dispatch({type: types.GET_PRODUCTS_REQUEST});
      const getProduct = await getDatabase(data, {});
      dispatch({type: types.GET_PRODUCTS_SUCCESS, data: getProduct});
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.GET_PRODUCTS_FAILED, message: error});
    }
  };
}

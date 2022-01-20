import {auth, db, getDatabaseRealtime} from 'helpers/Firebase';
import {types} from '../../constants/order.constant';

export function getOrderUserAction(data) {
  return async (dispatch, getState) => {
    const {
      auth: {user},
    } = getState();

    try {
      dispatch({type: types.GET_ORDER_REQUEST});
      let options = {
        where: [['uid_buyer', '==', `${user?.user?.uid}`]],
        // orderBy: ["sex", "desc"],
      };
      const getOrders = await getDatabaseRealtime(data, options);

      getOrders.onSnapshot(result => {
        let array = [];

        result.docs.forEach(item => {
          let id = item.id;
          let data = item.data();

          array.push({id, ...data});
        });
        dispatch({type: types.GET_ORDER_SUCCESS, data: array});
      });
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.GET_ORDER_FAILED, message: error});
    }
  };
}

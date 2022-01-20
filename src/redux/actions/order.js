import firestore from '@react-native-firebase/firestore';
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

export function getOrderSellerAction(data) {
  return async (dispatch, getState) => {
    const {
      auth: {user},
    } = getState();

    try {
      dispatch({type: types.GET_ORDER_REQUEST});
      let options = {
        where: [['uid_seller', '==', `${user?.user?.uid}`]],
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

export function updateOrderAction(data) {
  return async dispatch => {
    try {
      dispatch({type: types.UPDATE_ORDER_REQUEST});

      await db.collection('orders').doc(data?.id).update({
        status: data?.status,
      });
      await db
        .collection('orders')
        .doc(data?.id)
        .collection('status_update')
        .doc()
        .set({
          name: data?.status,
          created_at: firestore.FieldValue.serverTimestamp(),
        });
      dispatch({type: types.UPDATE_ORDER_SUCCESS});
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.UPDATE_ORDER_FAILED, message: error});
    }
  };
}

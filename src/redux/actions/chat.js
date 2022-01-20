import {auth, db, getDatabase} from 'helpers/Firebase';
import {types} from '../../constants/chat.constant';
import firestore from '@react-native-firebase/firestore';

export function getListChatAction() {
  return async (dispatch, getState) => {
    try {
      const {
        auth: {user},
      } = getState();
      dispatch({type: types.GET_LIST_CHAT_REQUEST});

      const getDB = await db
        .collection('chats')
        .doc(user?.user?.uid)
        .collection('list_chat')
        .orderBy('date', 'desc')
        .onSnapshot(result => {
          let array = [];

          result.docs.forEach(item => {
            let id = item.id;
            let data = item.data();

            array.push({id, ...data});
          });
          dispatch({type: types.GET_LIST_CHAT_SUCCESS, data: array});
        });
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.GET_LIST_CHAT_FAILED, message: error});
    }
  };
}

export function getDetailListChatAction(userId) {
  return async (dispatch, getState) => {
    try {
      const {
        auth: {user},
      } = getState();
      dispatch({type: types.GET_DETAIL_LIST_CHAT_REQUEST});

      const getDB = await db
        .collection('chats')
        .doc(user?.user?.uid)
        .collection('list_chat')
        .doc(userId)
        .collection('detail_chat')
        .orderBy('date', 'asc')
        .onSnapshot(result => {
          let array = [];

          result.docs.forEach(item => {
            let id = item.id;
            let data = item.data();

            array.push({id, ...data});
          });
          dispatch({type: types.GET_DETAIL_LIST_CHAT_SUCCESS, data: array});
        });
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.GET_DETAIL_LIST_CHAT_FAILED, message: error});
    }
  };
}

export function createChatAction(data) {
  console.log('🚀 ~ file: chat.js ~ line 70 ~ createChatAction ~ data', data);
  return async (dispatch, getState) => {
    try {
      const {
        auth: {user},
      } = getState();
      dispatch({type: types.CREATE_LIST_CHAT_REQUEST});

      await db
        .collection('chats')
        .doc(data?.uid_buyer)
        .collection('list_chat')
        .doc(data?.uid_seller)
        .set({
          date: firestore.FieldValue.serverTimestamp(),
          name: data?.store || data?.name,
          preview: data?.message,
          uid_buyer: data?.uid_buyer,
          uid_seller: data?.uid_seller,
        });

      await db
        .collection('chats')
        .doc(data?.uid_seller)
        .collection('list_chat')
        .doc(data?.uid_buyer)
        .set({
          date: firestore.FieldValue.serverTimestamp(),
          name: user?.user?.email,
          preview: 'buyer: ' + data?.message,
          uid_buyer: data?.uid_buyer,
          uid_seller: data?.uid_seller,
        });

      await db
        .collection('chats')
        .doc(data?.uid_buyer)
        .collection('list_chat')
        .doc(data?.uid_seller)
        .collection('detail_chat')
        .doc()
        .set({
          name: data?.store || data?.name,
          uid: data?.uid_buyer,
          message: data?.message,
          date: firestore.FieldValue.serverTimestamp(),
        });

      await db
        .collection('chats')
        .doc(data?.uid_seller)
        .collection('list_chat')
        .doc(data?.uid_buyer)
        .collection('detail_chat')
        .doc()
        .set({
          name: user?.user?.email,
          uid: data?.uid_buyer,
          message: data?.message,
          date: firestore.FieldValue.serverTimestamp(),
        });
      dispatch({type: types.CREATE_LIST_CHAT_SUCCESS});
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.CREATE_LIST_CHAT_FAILED, message: error});
    }
  };
}

export function createChatSellerAction(data) {
  console.log(
    '🚀 ~ file: chat.js ~ line 140 ~ createChatSellerAction ~ data',
    data,
  );
  return async (dispatch, getState) => {
    try {
      const {
        auth: {user},
      } = getState();
      dispatch({type: types.CREATE_LIST_CHAT_SELLER_REQUEST});

      await db
        .collection('chats')
        .doc(data?.uid_buyer)
        .collection('list_chat')
        .doc(data?.uid_seller)
        .update({
          date: firestore.FieldValue.serverTimestamp(),
          name: data?.buyer_name || data?.name,
          preview: 'seller: ' + data?.message,
          uid_buyer: data?.uid_buyer,
          uid_seller: data?.uid_seller,
        });

      await db
        .collection('chats')
        .doc(data?.uid_seller)
        .collection('list_chat')
        .doc(data?.uid_buyer)
        .update({
          date: firestore.FieldValue.serverTimestamp(),
          name: 'Miranjo Store',
          preview: data?.message,
          uid_buyer: data?.uid_buyer,
          uid_seller: data?.uid_seller,
        });

      await db
        .collection('chats')
        .doc(data?.uid_buyer)
        .collection('list_chat')
        .doc(data?.uid_seller)
        .collection('detail_chat')
        .doc()
        .set({
          name: 'Miranjo Store',
          uid: data?.uid_seller,
          message: data?.message,
          date: firestore.FieldValue.serverTimestamp(),
        });

      await db
        .collection('chats')
        .doc(data?.uid_seller)
        .collection('list_chat')
        .doc(data?.uid_buyer)
        .collection('detail_chat')
        .doc()
        .set({
          name: 'Miranjo Store',
          uid: data?.uid_seller,
          message: data?.message,
          date: firestore.FieldValue.serverTimestamp(),
        });
      dispatch({type: types.CREATE_LIST_CHAT_SELLER_SUCCESS});
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.CREATE_LIST_CHAT_SELLER_FAILED, message: error});
    }
  };
}

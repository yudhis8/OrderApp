import {auth, db} from 'helpers/Firebase';
import {types} from '../../constants/auth.constant';

export function authAction(data) {
  return async dispatch => {
    try {
      dispatch({type: types.LOGIN_AUTH_REQUEST});
      auth
        .signInWithEmailAndPassword(data.username, data.password)
        .then(async data => {
          const user = await db
            .collection('users')
            .where('uid', '==', data.user?.uid)
            .get();
          if (user.docs.length === 0) {
            await db.collection('users').doc(data.user?.uid).set({
              uid: data.user?.uid,
              name: data.user?.displayName,
              authProvider: 'email',
              email: data.user?.email,
              fill: false,
            });
          }
          dispatch({type: types.LOGIN_AUTH_SUCCESS, data});
        });
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.LOGIN_AUTH_FAILED, message: error});
    }
  };
}

export function logoutAction(data) {
  return async dispatch => {
    try {
      dispatch({type: types.LOGOUT_AUTH_REQUEST});
      auth.signOut().then(data => {
        dispatch({type: types.LOGOUT_AUTH_SUCCESS});
      });
    } catch (error) {
      console.log('🚀 ~ file: auth.js ~ line 29 ~ authAction ~ error', error);
      dispatch({type: types.LOGOUT_AUTH_FAILED, message: error});
    }
  };
}

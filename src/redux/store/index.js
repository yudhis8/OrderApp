import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';

const composeEnhancers = compose;

const persistConfig = {
  key: 'LIFTED_REDUX_STORE',
  storage: AsyncStorage,
  whitelist: ['auth'],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
export const persistor = persistStore(store);

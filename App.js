import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from './src/navigations/App.navigation';
// import firebase from '@react-native-firebase/app';
// import config from 'helpers/FirebaseConfig';

const App = ({params}) => {
  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(config);
  // }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

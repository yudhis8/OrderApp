/**
 * @format
 * @flow
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import HomeScreen from '../screens/home';
import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

test('render TextComponent', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

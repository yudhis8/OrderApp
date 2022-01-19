/**
 * @format
 * @flow
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {ButtonComponent} from '../component';

test('render TextComponent', () => {
  const tree = renderer.create(<ButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

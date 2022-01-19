/**
 * @format
 * @flow
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {RowComponent} from '../component';

test('render TextComponent', () => {
  const tree = renderer.create(<RowComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

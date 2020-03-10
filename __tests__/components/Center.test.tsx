import 'react-native';
import React from 'react';
import Center from '../../src/components/Center';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('<Center/> renders correctly', () => {
  renderer.create(<Center />);
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
it("takes snapshot",()=>{
  const wrapper = renderer.create(<App/>).toJSON()
  expect(wrapper).toMatchSnapshot()
})

it("Text length",()=>{
  expect(renderer.create(<App/>).find('Text').length).toEqual(1)
})



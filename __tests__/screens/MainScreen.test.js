import MainScreen from '../../src/screens/MainScreen'
import React from 'react';
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer';


describe('Main screen', () => {  
  const wrapper = shallow(<MainScreen/>)
  it("not null",()=>{
    expect(wrapper).not.toBeNull()
  })
});

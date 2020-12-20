import React from 'react'
import {shallow} from 'enzyme'
import { Text } from 'react-native'

it("just shallow test ", ()=>{
    const wrapper = shallow(<Text>rrrr</Text>)
    expect(wrapper.text()).toEqual('rrrr')
})
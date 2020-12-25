import {shallow} from 'enzyme';
import React from 'react';
import InputField from '../../src/components/InputField';

const testID = (id) => {
  return (cmp) => cmp.props().testID === id;
};

describe('input field test ', () => {
  const addRestaurant = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InputField addRestaurant={addRestaurant} />);
  });
  const rName = 'test restaurant';
  const dName = 'test dish';

  it('not null', () => {
    expect(wrapper).not.toBeNull();
  });


  it('calling addRestaurant when click on button', () => {
  const rNameInput = wrapper.findWhere(testID('restaurantNameText'));
    const dNameInput = wrapper.findWhere(testID('dishNameText'));
    rNameInput.simulate('changeText', rName);
    dNameInput.simulate('changeText', dName);
    expect(wrapper.findWhere(testID('testText')).shallow().text()).toEqual(rName);
    wrapper.findWhere(testID('addRestaurantBtn')).simulate('press');
    expect(addRestaurant).toHaveBeenCalledWith(rName, dName);
  });


  it("clear input field after submit",()=>{
    wrapper.findWhere(testID("restaurantNameText")).simulate('changeText', rName)
    wrapper.findWhere(testID("dishNameText")).simulate('changeText', dName)
    wrapper.findWhere(testID("addRestaurantBtn")).simulate('press')
    expect(wrapper.findWhere(testID("restaurantNameText")).props().value).toEqual('')
    expect(wrapper.findWhere(testID("dishNameText")).props().value).toEqual('')
  })


  it('shows error text when input empty', () => {
    expect(wrapper.exists(testID('errorMessage'))).toBe(false);
    wrapper.findWhere(testID('addRestaurantBtn')).simulate('press');
  expect(wrapper.findWhere(testID('errorMessage'))).not.toBeNull();
  });

});

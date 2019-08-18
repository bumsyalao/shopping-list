import React from 'react';
import { shallow, configure } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

import { ShoppingInput } from './shoppingInput';

configure({ adapter: new adapter() });
const spy = jest.fn();

describe('ShoppingInput component', () => {
  const props = {
    budget: 5000,
    items: {
      product: 'shoes',
      price: 3,
      quantity: 300,
    },
  
    getItems: jest.fn(() => Promise.resolve()),
    setBudget: jest.fn(() => Promise.resolve()),
    addItem: jest.fn(() => Promise.resolve()),
  };
  const component = shallow(
    <ShoppingInput {...props} />
  );

  it('should render component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should set state when onChange function is called', () => {
    component.instance().onChange({target: {value: 500, id: 'budget'}});
    expect(component.state('budget')).toEqual(500)
  });

  it('should set budget when set budget is clicked', () => {
    component.instance().onChange({target: {value: 500, id: 'budget'}});
    expect(component.find('#set-budget').length).toEqual(1);
    expect(component.state('budget')).toEqual(500);
  })
});


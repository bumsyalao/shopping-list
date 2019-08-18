import React from 'react';
import { shallow, configure } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import moment from 'moment';

import { ShoppingHeader } from './shoppingHeader';

configure({ adapter: new adapter() });
const spy = jest.fn();

jest.mock('moment');

// moment.format = jest.fn(() => Promise.resolve());

xdescribe('ShoppingInput component', () => {

  const component = shallow(
    <ShoppingHeader />
  );

  it('should render component', () => {
    expect(component).toMatchSnapshot();
  });
});



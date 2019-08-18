import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new adapter() });
let getShallowComponent;

describe('App component', () => {
  getShallowComponent = () => shallow(<App />);

  it('should match snapshot', () => {
    expect(getShallowComponent()).toMatchSnapshot();
  });
});

import React, { Component, useState } from 'react';
import './App.scss';
import ShoppingHeader from './components/shoppingHeader/shoppingHeader';
import ShoppingInput from './components/shoppingInput/shoppingInput';


const moment = require('moment');

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div className="shopping-list" id="notebook">
      <ShoppingHeader/>
      <ShoppingInput />
    </div>
  );
}
}



export default App;

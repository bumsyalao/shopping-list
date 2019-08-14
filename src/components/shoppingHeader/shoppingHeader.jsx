import React, { Component } from 'react';
import './shoppingHeader.css';

const moment = require('moment');


class ShoppingHeader extends Component {
  render() {
    return (
      <div>
        <p class="date">
          <span class="month">{moment().format('MMM')}</span> 
          <span class="day">{moment().format('Do').slice(0,2)}</span><sup>{moment().format('Do').slice(2,4)}</sup>
        </p>
        <h1>Shopping List</h1>
      </div>
    );
  }
}

export default ShoppingHeader;

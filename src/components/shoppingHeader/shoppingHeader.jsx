import React, { Component } from 'react';
import './shoppingHeader.css';


class ShoppingHeader extends Component {
  render() {
    return (
      <div>
        <p class="date"><span class="month">May</span> <span class="day">25</span><sup>th</sup></p>
        <h1>Shopping List</h1>
      </div>
    );
  }
}

export default ShoppingHeader;

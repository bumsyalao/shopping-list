import React, { Component } from 'react';
import './shoppingInput.css';


class ShoppingInput extends Component {
  render() {
    return (
      <div>
        <div class="budget-input">
          <input type="text" placeholder="what's your budget?" />
          <button>SET BUDGET</button>
        </div>
        <div id="input-form" class="shop-input">
          <input type="text" maxlength="30" placeholder="what you buying?" />
          <input type="text" placeholder="quantity" />
          <input type="text" placeholder="price" />
          <button>ADD</button>
        </div>
      </div>
    );
  }
}

export default ShoppingInput;

import React, { Component } from 'react';
import './shoppingCart.css';


class ShoppingCart extends Component {
  render() {
    return(
      <ul>
      <li><input type="checkbox" /><p>Dresses</p>
        <div>
        <img src="https://res.cloudinary.com/dcpfdxsly/image/upload/v1565798548/success_e2lfu4.png"/>
        <img src="https://res.cloudinary.com/dcpfdxsly/image/upload/v1565798337/error_a0zn3r.png"/>
        </div>
      </li>
      <li><input type="checkbox" /><p>Shoes</p></li>
      <li><input type="checkbox" /><p>Hair</p></li>
      <li><input type="checkbox" /><p>Jeans</p></li>
      <li><input type="checkbox" /><p>Skirts</p></li>
    </ul>
    );
  }
}

export default ShoppingCart;

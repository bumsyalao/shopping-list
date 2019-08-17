import React, { Component } from 'react';
import './shoppingCart.css';


class ShoppingCart extends Component {
  render() {
    return(
      <ul>
        {this.props.items.map(item => 
                <li><input type="checkbox" /><p>{item.product}</p>
                <div>{item.quantity}</div>
                <div>{item.price * item.quantity}</div>
                <div>
                <img src="https://res.cloudinary.com/dcpfdxsly/image/upload/v1565798548/success_e2lfu4.png"/>
                <img src="https://res.cloudinary.com/dcpfdxsly/image/upload/v1565798337/error_a0zn3r.png"/>
                </div>
              </li>
        )}
    </ul>
    );
  }
}

export default ShoppingCart;

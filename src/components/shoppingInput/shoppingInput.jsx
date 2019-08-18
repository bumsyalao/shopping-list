import React, { Component } from 'react';
import { connect } from 'react-redux';
import './shoppingInput.css';
import ShoppingCart from '../shoppingCart/shoppingCart';
import { setBudget, addItem, getItems } from '../../actions/shoppingListActions';


export class ShoppingInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      budget: '',
      product: '',
      quantity: null,
      price: null,
    }

    this.onChange = this.onChange.bind(this);
    this.onSetBudget = this.onSetBudget.bind(this);
    this.onAddItem = this.onAddItem.bind(this);

  }

  componentDidMount() {
    if(this.props.items) {
    this.props.getItems();
  }}
  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  onSetBudget(event) {
    event.preventDefault();
    this.props.setBudget(this.state.budget);

  }

  onAddItem(event){
    event.preventDefault();

    const Items = {
      product: this.state.product,
      quantity: this.state.quantity,
      price: this.state.price,
    }

    this.props.addItem(Items);

  }

  renderBudget(budget) {
    return(
      <div>
        <p>{`Your Budget is ${budget}`}</p>
      </div>
    )
  }

  renderShoppingCart(shoppingItems) {
    return(
      <ShoppingCart items={shoppingItems}/>
    )
  }

  render() {
    return (
      <div>
        <div className="budget-input">
          <input
            id="budget"
            value={this.state.budget}
            onChange={this.onChange}
            type="text"
            placeholder="what's your budget?" />
          <button
            id="set-budget"
            disabled={!this.state.budget || this.props.budget}
            onClick={this.onSetBudget}>
          SET BUDGET</button>
        </div>
        <div id="input-form" className="shop-input">
          <input
            id="product"
            value={this.state.product}
            onChange={this.onChange}
            type="text"
            maxlength="30"
            placeholder="what you buying?" />
          <input
            id="quantity"
            value={this.state.quantity}
            onChange={this.onChange}
            type="text"
            placeholder="quantity" />
          <input
            id="price"
            value={this.state.price}
            onChange={this.onChange}
            type="text"
            placeholder="price" />
          <button
            onClick={this.onAddItem}>
          ADD</button>
        </div>
        <div>
          {this.renderBudget(this.props.budget || 0)}
        </div>
        <div>
          {this.renderShoppingCart(this.props.Items)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  budget: state.shoppingListReducer.budget,
  Items: state.shoppingListReducer.items,
});



export default connect(mapStateToProps, { setBudget, addItem, getItems })(ShoppingInput);

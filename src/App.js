import React,{ Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.scss';
import ShoppingHeader from './components/shoppingHeader/shoppingHeader';
import ShoppingInput from './components/shoppingInput/shoppingInput';
import ShoppingCart from './components/shoppingCart/shoppingCart';
import { simpleAction } from './actions/simpleAction';

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }
  render() {
  return (
    <div className="shopping-list" id="notebook">
      <ShoppingHeader />
      <ShoppingInput />
      <ShoppingCart />
    </div>
  );
}
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);

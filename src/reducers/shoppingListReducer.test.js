import shoppingListReducer, { initialState } from './shoppingListReducer';
import { setBudget, addItem, getItems } from '../actions/shoppingListActions';

const mybudget = 5000;

describe('shoppingList reducer', () => {
  it('return default state', () => {
    expect(shoppingListReducer(undefined, {})).toMatchSnapshot();
  });

  it('should set budget when set budget is called', () => {
    const newState = shoppingListReducer(initialState, {
      type: 'SET_BUDGET',
      payload: mybudget,
    });
    expect(newState.budget).toMatchSnapshot();
    expect(newState.budget).toEqual(5000);

  });

  it('should add item when addItem is called', () => {
    const newState = shoppingListReducer(initialState, {
      type: 'ADD_ITEM',
      newItem: {
        product: 'shoes',
        quantity: '3',
        price: '300'
      }
    });

    expect(newState.items.product).toMatchSnapshot();
    expect(newState.items[0].product).toEqual('shoes');
  });

  it('should get items', () => {
    const newState = shoppingListReducer(initialState, {
      type: 'GET_ITEMS'
    });

    expect(newState.items).toMatchSnapshot();
  })

});
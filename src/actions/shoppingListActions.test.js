import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { setBudget, addItem, getItems } from './shoppingListActions';
//create a mock store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('setBudget', () => {
  it('should dispatch set budget action', () => {
    const store = mockStore({});

    const expectedAction = [{
      type: 'SET_BUDGET',
      payload: 5000
    }];

    store.dispatch(setBudget(5000));
    expect(store.getActions()).toEqual(expectedAction);

  });
});

describe('addItem', () => {
  it('should dispatch add item action', () => {
    const store = mockStore({});

    const items = {
      product: "hair",
      price: 50,
      quantity: 2,
    }
    const expectedAction = [{
      type: 'ADD_ITEM',
      newItem: {
        product: "hair",
        price: 50,
        quantity: 2,
      }
    }];

    store.dispatch(addItem(items));
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('getItems', () => {
  it('should dispatch get item action', () => {
    const store = mockStore({});
    const expectedAction = [{
      type: 'GET_ITEMS',
    }];

    store.dispatch(getItems())
    expect(store.getActions()).toEqual(expectedAction);

  });
});


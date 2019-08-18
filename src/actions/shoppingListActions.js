

 export const setBudget = (budget) => dispatch => {
   dispatch({
     type: 'SET_BUDGET',
     payload: budget
   })
 };

export const addItem = (Items) => dispatch => {
  dispatch({
    type: 'ADD_ITEM',
    newItem: Items,
  })
};

export const getItems = () => dispatch => {
  dispatch({
    type: 'GET_ITEMS'
  })
};


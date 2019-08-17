
export const simpleAction = () => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION',
   payload: 'result_of_simple_action',
  })
 };

 export const setBudget = (budget) => dispatch => {
   dispatch({
     type: 'SET_BUDGET',
     payload: budget
   })
 };

 export const getBudget = () => dispatch => {
  dispatch({
    type: 'GET_BUDGET',
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


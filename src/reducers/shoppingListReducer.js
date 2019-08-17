let initialState = {
  budget: null,
  Items: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
   case 'SET_BUDGET':
    return {
      ...state,
     budget: action.payload
    }
    
   case 'ADD_ITEM':
    let newState = {...state}
     newState.Items.push(action.newItem);
     return newState

   case 'GET_ITEMS':
     return state.Items

   default:
    return state
  }
 };

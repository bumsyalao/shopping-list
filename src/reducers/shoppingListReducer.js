let initialState = {
  budget: null,
  items: [],
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
     newState.items.push(action.newItem);
     return newState

   case 'GET_ITEMS':
     return state.items

   default:
    return state
  }
 };



const FAV_ACTIONS = {
  ADD: 'add item',
  REMOVE: 'remove item'
}

const favReducer = ( state = [], action ) => {
  console.log(state)
  console.log(action.payload.id)
  
  switch ( action.type ) {
    case FAV_ACTIONS.ADD: 
      console.log('ADDED: ' + action.payload.id);
      return [...state, action.payload];
    case FAV_ACTIONS.REMOVE:
      console.log('REMOVED: ' + action.payload.id);
      return [...state.filter((product) => product.id !== action.payload.id) ]
    default:
      console.log('Error from fav Reducer?')
      return state;    
  }
}


export default favReducer;
export { FAV_ACTIONS };

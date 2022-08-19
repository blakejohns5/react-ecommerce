


const FAV_ACTIONS = {
  ADD: 'add item',
  REMOVE: 'remove item',
  RESET: 'reset'
}

const favReducer = ( state = [], action ) => {
  switch ( action.type ) {
    case FAV_ACTIONS.ADD: 
      return [...state, action.payload];
    case FAV_ACTIONS.REMOVE:
      return [...state.filter((product) => product.id !== action.payload.id)];
    case FAV_ACTIONS.RESET:
      return [];
    default:
      console.log('Error from fav Reducer')
      return state;    
  }
}


export default favReducer;
export { FAV_ACTIONS };



const ACTIONS = {
  ADD_ITEM: 'add item',
  REMOVE_ITEM: 'remove item'
}


const favoritesReducer = ( initialState = [], action ) => {

  switch ( action.type ) {
    case ACTIONS.ADD_ITEM: 
      return [ ...initialState, action.payload ];
    
    default:
      return initialState;
    
  }


}


export default favoritesReducer;
export { ACTIONS };
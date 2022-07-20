

const ACTIONS = {
  ADD: 'add item',
  REMOVE: 'remove item'
}


const favoritesReducer = ( state = [], action ) => {
  console.log(state)
  switch ( action.type ) {
    
    case ACTIONS.ADD: 
    console.log(state)
      return [...state, action.payload];
      
    case ACTIONS.REMOVE:
      console.log(state)
      return [...state.filter((product) => product === action.payload) ]
    default:
      console.log('Error from Favorites Reducer?')
      return state;
    
  }


}


export default favoritesReducer;
export { ACTIONS };

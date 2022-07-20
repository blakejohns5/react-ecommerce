import { useReducer } from "react"
import favoritesReducer from "../../helpers/favoritesReducer"
import { ACTIONS } from "../../helpers/favoritesReducer";




const Favorites = () => {
  const initialState =   {
    id: 1006,
    name: "Vans Checkerboard SK8-HI Tapered",
    
  }
  const [ favoritesState, dispatch ] = useReducer( favoritesReducer, initialState )
  

  // function handleAdd (e) {
  //   e.preventDefault();
  //   dispatch({ type: ACTIONS.ADD_ITEM })

  // }

  return (
    <>
    <h5>Wishlist from Wishlist Component</h5>
    <hr />
    <div className='col-6'>
      <h4>Wishlist</h4>
      <ul><li> {favoritesState.name}</li>    
    

      </ul>
      
    </div>

    </>
  )

}



export default Favorites;
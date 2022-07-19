import { useReducer, useState } from "react"
import favoritesReducer from "../../helpers/favoritesReducer"
import { ACTIONS } from "../../helpers/favoritesReducer";


const initialState = [];


const Favorites = () => {
  
  const [ state, dispatch ] = useReducer( favoritesReducer, initialState )
  const [ entry, setEntry] = useState();

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
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
      
    </div>

    </>
  )

}



export default Favorites;
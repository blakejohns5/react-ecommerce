import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { ACTIONS } from '../../helpers/favoritesReducer';



const FavoritesBtn = ({ ...props }) => {
  const {id, img, name, price, sale, favoritesState, favoritesDispatch} = props;  
  const clickedProduct =  {id: id, img: img, name: name, price: price, sale: sale } 

  // gives toggle to visual affect with icons for favorites
  const [ favorite, setFavorite ] = useState(false);   

  

  const handleClick = () => {
    setFavorite(favorite === true ? false : true);  // toggle favorites icon
    if (favorite === false) {
      console.log('unfavorited')
      favoritesDispatch({ 
        type: ACTIONS.ADD, 
        payload: clickedProduct
      }) 
    } else {
      console.log('Favorited')
      favoritesDispatch({ 
        type: ACTIONS.REMOVE, 
        payload: clickedProduct
      }) 
    }
  }
 
  return (
    
      <button type="button" onClick={handleClick} className="border-0 fw-bold fs-4  bg-light">{ favorite ? <FaHeart className='blue' /> : <FaRegHeart /> }</button>
    
  )
}

export default FavoritesBtn
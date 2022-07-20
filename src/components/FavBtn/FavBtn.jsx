import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { ACTIONS } from '../../helpers/favReducer';



const FavBtn = (props) => {
  const {id, img, name, price, sale, favState, favDispatch} = props; 
  const clickedProduct =  {id: id, img: img, name: name, price: price, sale: sale } 
  
  const isInFavs = favState.find(item => item.id === clickedProduct.id);   
  
  // gives toggle to visual affect with icons for fav
  const [ favorite, setFavorite ] = useState(false);     

  const handleClick = () => {
    setFavorite(favorite === true ? false : true);  // toggle fav icon
    if (favorite === false) {
      favDispatch({ 
        type: ACTIONS.ADD, 
        payload: clickedProduct
      }) 
    } else {
      
      favDispatch({ 
        type: ACTIONS.REMOVE, 
        payload: clickedProduct
      }) 
    }
  }
 
  return (
    
      <button type="button" onClick={handleClick} className="border-0 fw-bold fs-4  bg-white">{ isInFavs ? <FaHeart className='blue' /> : <FaRegHeart /> }</button>
    
  )
}

export default FavBtn
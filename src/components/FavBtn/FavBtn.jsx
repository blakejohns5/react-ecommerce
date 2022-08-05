import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { FAV_ACTIONS } from '../../helpers/favReducer';



const FavBtn = (props) => {
  const {id, img, name, price, sale, favState, favDispatch} = props; 
  const clickedProduct =  {id: id, img: img, name: name, price: price, sale: sale } 
  
  const isInFavs = favState.find(item => item.id === clickedProduct.id);   
  
  // gives toggle to visual affect with icons for fav
  const [ favorite, setFavorite ] = useState(isInFavs);     

  const manageReducer = () => {
    // if (favorite === false) {
    // using this version makes click much faster, more effective
    if (!favorite) {     
      favDispatch({ 
        type: FAV_ACTIONS.ADD, 
        payload: clickedProduct
      }) 
    } else {
      
      favDispatch({ 
        type: FAV_ACTIONS.REMOVE, 
        payload: clickedProduct
      }) 
    }
  }

  const handleClick = () => {
    setFavorite(favorite === true ? false : true);  // toggle fav icon
    manageReducer();
  }
 
  return (
    
      <button type="button" onClick={handleClick} className="btn-fav">{ isInFavs ? <FaHeart className='faved' /> : <FaRegHeart /> }</button>
    
  )
}

export default FavBtn
import { useState, useContext } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import AuthContext from '../../context/AuthProvider';
import { FAV_ACTIONS } from '../../helpers/favReducer.js';
import { updateUserWishlist } from '../../helpers/wishlist'




const FavBtn = (props) => {
  const {id, img, name, price, sale, favState, favDispatch } = props; 
  const clickedProduct =  {id: id, img: img, name: name, price: price, sale: sale } 
  const { user } = useContext(AuthContext);
  

  // gives toggle to visual affect with icons for fav
  const isInFavs = favState.find(item => item.id === clickedProduct.id);   
  const [ favorite, setFavorite ] = useState(isInFavs);    

  const manageReducer = () => {
    // if (favorite === false) {
    // using this version makes click much faster, more 
    
      if (!favorite) {    
        updateUserWishlist(user.user.email, clickedProduct.id)
        favDispatch({ 
          type: FAV_ACTIONS.ADD, 
          payload: clickedProduct
        }) 
      } else {      
        updateUserWishlist(user.user.email, clickedProduct.id)
        favDispatch({ 
          type: FAV_ACTIONS.REMOVE, 
          payload: clickedProduct
        }) 
    
    }    
  }


  const handleClick = () => {
    if (user) {
      setFavorite(favorite === true ? false : true);  // toggle fav icon
      manageReducer();
    } else {
      console.log('You have to be logged in to access your wishlist')
    }
    
  }
 
  return (    
      <>
      <button type="button" onClick={handleClick} className="btn-fav">{ isInFavs ? <FaHeart className='faved' /> : <FaRegHeart /> }</button>
      
      </>
  )
}

export default FavBtn
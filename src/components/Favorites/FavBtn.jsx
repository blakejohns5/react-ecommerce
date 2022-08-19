import { useState, useContext } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import AuthContext from '../../context/AuthProvider';
import { FAV_ACTIONS } from '../../helpers/favReducer.js';
import { updateUserWishlist } from '../../helpers/wishlist'
import MessageContext from '../../context/MessageProvider'
import MessageDialog from '../Message/MessageDialog';




const FavBtn = (props) => {
  const {id, img, name, price, sale, favState, favDispatch } = props; 
  const clickedProduct =  {id: id, img: img, name: name, price: price, sale: sale } 
  const { user } = useContext(AuthContext);
  const { setMessage, setMessageType } = useContext(MessageContext);
  

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


  const handleClick = (e) => {
    e.preventDefault();
    if (user) {
      setFavorite(favorite === true ? false : true);  // toggle fav icon
      manageReducer();
    } else {
      setMessage('You must be logged in to see your wishlist')
      setMessageType('warning')
    }
    
  }
 
  return (
    <>
    {user ? (
      <button type="button" onClick={handleClick} className="btn-fav">{ isInFavs ? <FaHeart className='faved' /> : <FaRegHeart /> }</button>
    ) : (
      <button type="button" onClick={handleClick} data-bs-toggle='modal' data-bs-target='#messageModal' className="btn-fav">{ isInFavs ? <FaHeart className='faved' /> : <FaRegHeart /> }</button>
    )}    
    { !user && ( <MessageDialog /> )} 
    </>
  )
}

export default FavBtn
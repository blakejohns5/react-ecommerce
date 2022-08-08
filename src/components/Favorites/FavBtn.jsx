import { useState, useContext } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import AuthContext from '../../context/AuthProvider';
import { FAV_ACTIONS } from '../../helpers/favReducer';
import { fetchData, putUser, USERS_URL } from '../../helpers/apis';



const FavBtn = (props) => {
  const {id, img, name, price, sale, favState, favDispatch} = props; 
  const clickedProduct =  {id: id, img: img, name: name, price: price, sale: sale } 
  const { auth } = useContext(AuthContext);
  
  const updateUserWishlist = async () => {
    
    // email !== undefined ?? console.log('USER EXISTS')
    const users = await fetchData(USERS_URL)
    const user = users.find((user) => user.email === auth.email);
    user ? console.log('Add to ' + user.email) : console.log('No login')


  }
  
  const isInFavs = favState.find(item => item.id === clickedProduct.id);   
  
  // gives toggle to visual affect with icons for fav
  const [ favorite, setFavorite ] = useState(isInFavs);     

  const manageReducer = () => {
    // if (favorite === false) {
    // using this version makes click much faster, more effective
    if (!favorite) {    
      updateUserWishlist(); 
      favDispatch({ 
        type: FAV_ACTIONS.ADD, 
        payload: clickedProduct
      }) 
      
    } else {      
      updateUserWishlist();
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
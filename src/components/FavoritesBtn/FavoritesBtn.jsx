import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'



const FavoritesBtn = () => {

  const [ favorite, setFavorite ] = useState();

  const toggleFavorite = () => {
    setFavorite(favorite ? false : true);
  }

  return (
    
      <button type="button" onClick={toggleFavorite} className="border-0 fw-bold fs-4  bg-light">{ favorite ? <FaHeart className='blue' /> : <FaRegHeart /> }</button>
    
  )
}

export default FavoritesBtn
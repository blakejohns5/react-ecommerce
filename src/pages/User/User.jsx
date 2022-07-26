import { useContext } from 'react'
import Favorites from '../../components/Favorites/Favorites'
import Registration from '../../components/Registration/Registration'
import AuthContext from '../../context/AuthProvider'
import UserDetails from '../../components/UserDetails/UserDetails'

function User ({ favState, favDispatch }) {
  const { auth, setAuth } = useContext(AuthContext);
 
  return (
    <>
    <main className='user d-flex flex-column align-items-center col-10 mt-4'>
      <h2>User Page Areas</h2>
      <div className='d-flex gap-5 my-5 col-10 align-items-start justify-content-center'>
        <div className='col-7 px-5 me-5 '>
        <h2 className="mb-4">Your Wishlist</h2>
          <Favorites favState={favState} favDispatch={favDispatch} />
        </div>
        
        <div className='col-5 px-3 ms-3'>
          <h2 >User Details:</h2>
          { Object.keys(auth).length > 0 ? (
            <UserDetails />
          ) : (
          <Registration />
          )}
          
          
          
          {/* <h4>User Details</h4>
          <form>
            <label htmlFor="firstName"></label>
            <input type="text" />
            <label htmlFor="lastName"></label>
            <input type="text" />
          </form> */}



        </div>
      </div>
    </main>
    </>
    
  )
}

export default User 
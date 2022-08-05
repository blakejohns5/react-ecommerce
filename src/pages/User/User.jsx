import { useContext } from 'react'
import Favorites from '../../components/Favorites/Favorites'
import Registration from '../../components/Registration/Registration'
import AuthContext from '../../context/AuthProvider'
import UserDetails from '../../components/UserDetails/UserDetails'

function User ({ favState, favDispatch }) {
  const { auth } = useContext(AuthContext);

  return (
    <>
    <main className='user__main col-10'>
      { Object.keys(auth).length > 0 ? (
        <>
        <h1>My Account:</h1>
        <h3> - logged in as {auth.email} - </h3>
        </>
      ) : (
        <h1>Just visiting? Or would you like to create an account?</h1>
      )}

      <section className='user col-10'>
        <article className='user__wishlist col-7'>
        <h2>Your Wishlist</h2>
          <Favorites favState={favState} favDispatch={favDispatch} />
        </article>
        <article className='user__details col-5'>
          <h2>User Details</h2>
          { Object.keys(auth).length > 0 ? (
            <UserDetails />
          ) : (
            <Registration />
          )}
        </article>
      </section>
    </main>
    </>
    
  )
}

export default User 
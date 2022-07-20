import React from 'react'
import Favorites from '../../components/Favorites/Favorites'

function User ({ favState, favDispatch }) {
 
  return (
    <>
    <main className='user d-flex flex-column align-items-center col-10 mt-4'>
      <h2>User Page Areas</h2>
      <div className='d-flex gap-5 mt-4 col-12 align-items-center justify-content-center'>
        <div className='col-7 '>
          <Favorites favState={favState} favDispatch={favDispatch} />
        </div>
        
        <div className='col-5'>
          <h4>User Details</h4>
          <form>
            <label htmlFor="firstName"></label>
            <input type="text" />
            <label htmlFor="lastName"></label>
            <input type="text" />
          </form>
        </div>
      </div>
    </main>
    </>
    
  )
}

export default User 
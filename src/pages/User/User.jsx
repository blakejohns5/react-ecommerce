import React from 'react'
import Favorites from '../../components/Favorites/Favorites'

function User () {
  return (
    <>
    <main className='d-flex flex-column align-items-center justify-content-center col-10 mt-5 pt-3'>
      <h2>User Page Areas</h2>
      <div className='d-flex gap-5 mt-5 pt-2'>
        <Favorites />
        <div className='col-6'>
          <h4>User Details</h4>
          <form>
            <label htmlFor="firstName"></label>
            <input type="text" value='FirstName' />
            <label htmlFor="lastName"></label>
            <input type="text" value='lastName' />
          </form>
        </div>
      </div>
    </main>
    </>
    
  )
}

export default User 